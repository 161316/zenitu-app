import { Router } from "express";
import { anthropic } from "@workspace/integrations-anthropic-ai";

const router = Router();

function requireAuth(req: any, res: any, next: any) {
  if (!req.session?.userId) {
    res.status(401).json({ error: "Não autenticado" });
    return;
  }
  next();
}

router.post("/", requireAuth, async (req, res) => {
  const { question, studentAnswer, moduleTitle, lessonTitle, questionType } = req.body;

  if (!question || !studentAnswer) {
    res.status(400).json({ error: "Dados incompletos" });
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
