import { Router } from "express";
import { rateLimit } from "express-rate-limit";
import { sql } from "drizzle-orm";
import { anthropic } from "@workspace/integrations-anthropic-ai";
import { db, correctionUsageTable } from "@workspace/db";

const router = Router();

function requireAuth(req: any, res: any, next: any) {
  if (!req.session?.userId) {
    res.status(401).json({ error: "Não autenticado" });
    return;
  }
  next();
}

const ipLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Muitas requisições. Aguarde um momento." },
});

const userLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => String((req as any).session?.userId ?? req.ip),
  message: { error: "Muitas correções solicitadas. Aguarde um momento." },
});

const DAILY_LIMIT = 20;

function todayUtc(): string {
  return new Date().toISOString().slice(0, 10);
}

router.post("/", ipLimiter, requireAuth, userLimiter, async (req, res) => {
  const body = req.body ?? {};
  const { question, studentAnswer } = body;
  const moduleTitle: string = typeof body.moduleTitle === "string" && body.moduleTitle.length <= 100 ? body.moduleTitle : "";
  const lessonTitle: string = typeof body.lessonTitle === "string" && body.lessonTitle.length <= 100 ? body.lessonTitle : "";
  const questionType: string = body.questionType === "objective" ? "objective" : "written";

  if (typeof question !== "string" || question.length < 1 || question.length > 500 ||
      typeof studentAnswer !== "string" || studentAnswer.length < 1 || studentAnswer.length > 1000) {
    res.status(400).json({ error: "Dados inválidos ou muito longos." });
    return;
  }

  const userId: number = req.session.userId!;
  const today = todayUtc();

  const rows = await db
    .insert(correctionUsageTable)
    .values({ userId, usageDate: today, callCount: 1 })
    .onConflictDoUpdate({
      target: [correctionUsageTable.userId, correctionUsageTable.usageDate],
      set: { callCount: sql`correction_usage.call_count + 1` },
      where: sql`correction_usage.call_count < ${DAILY_LIMIT}`,
    })
    .returning({ callCount: correctionUsageTable.callCount });

  if (rows.length === 0) {
    res.status(429).json({
      error: `Limite diário de ${DAILY_LIMIT} correções atingido. Volte amanhã!`,
    });
    return;
  }

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const systemPrompt = `Você é um tutor especialista em gestão empresarial ensinando para alunos de 11 anos no Brasil. 
Sua função é GUIAR o aluno ao conhecimento correto, NUNCA dar a resposta diretamente.

REGRAS ABSOLUTAS:
1. NUNCA revele a resposta correta explicitamente
2. SEMPRE guie com perguntas socráticas e pistas
3. Seja encorajador mesmo quando errar
4. Use linguagem simples, adequada para 11 anos
5. Aponte especificamente o que está certo e o que precisa melhorar
6. Se a resposta estiver correta, confirme e aprofunde o raciocínio
7. Se estiver incompleta, elogie o que acertou e guie para o que falta
8. Se estiver errada, não diga "errado" — diga "pensa comigo..." e dê uma pista
9. Máximo 4 parágrafos curtos
10. Sempre terminar com uma pergunta reflexiva que ajude o aluno a chegar mais perto

Contexto: Módulo "${moduleTitle}", Aula "${lessonTitle}", Tipo: ${questionType === "written" ? "dissertativa" : "objetiva"}`;

  const userMessage = `Pergunta: "${question}"
Resposta do aluno: "${studentAnswer}"

Avalie esta resposta seguindo as regras: guie sem dar a resposta. Mostre o caminho certo através de pistas e perguntas.`;

  const stream = anthropic.messages.stream({
    model: "claude-haiku-4-5",
    max_tokens: 600,
    system: systemPrompt,
    messages: [{ role: "user", content: userMessage }],
  });

  for await (const event of stream) {
    if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
      res.write(`data: ${JSON.stringify({ content: event.delta.text })}\n\n`);
    }
  }

  res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
  res.end();
});

export default router;
