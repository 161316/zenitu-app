import { Router } from "express";
import { rateLimit } from "express-rate-limit";
import crypto from "node:crypto";
import { db } from "@workspace/db";
import { usersTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { sql } from "drizzle-orm";
import { hashPassword } from "../lib/crypto";
import { sendPasswordResetEmail } from "../lib/email";
import { logger } from "../lib/logger";

const router = Router();

const resetLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Muitas solicitações. Aguarde 15 minutos." },
});

function hashToken(raw: string): string {
  return crypto.createHash("sha256").update(raw).digest("hex");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

router.post("/forgot-password", resetLimiter, async (req, res) => {
  const { email } = req.body as { email?: string };
  if (!email || !isValidEmail(email)) {
    res.status(400).json({ error: "E-mail inválido" });
    return;
  }

  const NEUTRAL_RESPONSE = { ok: true, message: "Se este e-mail estiver cadastrado, você receberá as instruções em breve." };
  const [user] = await db.select({ id: usersTable.id, email: usersTable.email }).from(usersTable).where(eq(usersTable.email, email.toLowerCase())).limit(1);

  if (!user) {
    res.json(NEUTRAL_RESPONSE);
    return;
  }

  await db.execute(sql`DELETE FROM password_reset_tokens WHERE user_id = ${user.id}`);

  const rawToken = crypto.randomBytes(32).toString("hex");
  const tokenHash = hashToken(rawToken);
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

  await db.execute(sql`
    INSERT INTO password_reset_tokens (user_id, token_hash, expires_at)
    VALUES (${user.id}, ${tokenHash}, ${expiresAt})
  `);

  const domains =
    process.env.REPLIT_DOMAINS?.split(",")[0] ??
    process.env.RENDER_EXTERNAL_HOSTNAME ??
    "localhost:80";
  const resetUrl = `https://${domains}/recuperar-senha?token=${rawToken}`;

  try {
    await sendPasswordResetEmail(user.email, resetUrl);
  } catch (err) {
    logger.error({ err }, "Failed to send reset email");
  }

  res.json(NEUTRAL_RESPONSE);
});

router.post("/reset-password", resetLimiter, async (req, res) => {
  const { token, password } = req.body as { token?: string; password?: string };
  if (!token || token.length !== 64 || !/^[0-9a-f]+$/.test(token)) {
    res.status(400).json({ error: "Link inválido ou expirado" });
    return;
  }
  if (!password || password.length < 8 || password.length > 72) {
    res.status(400).json({ error: "Senha deve ter ao menos 8 caracteres" });
    return;
  }
  const tokenHash = hashToken(token);

  const rows = await db.execute(sql`
    SELECT prt.id, prt.user_id, prt.expires_at, prt.used_at
    FROM password_reset_tokens prt
    WHERE prt.token_hash = ${tokenHash}
    LIMIT 1
  `);

  const record = rows.rows[0] as { id: number; user_id: number; expires_at: Date; used_at: Date | null } | undefined;

  if (!record) {
    res.status(400).json({ error: "Link inválido ou expirado" });
    return;
  }
  if (record.used_at) {
    res.status(400).json({ error: "Este link já foi utilizado" });
    return;
  }
  if (new Date(record.expires_at) < new Date()) {
    await db.execute(sql`DELETE FROM password_reset_tokens WHERE id = ${record.id}`);
    res.status(400).json({ error: "Link expirado. Solicite um novo." });
    return;
  }

  const passwordHash = await hashPassword(password);

  await db.execute(sql`UPDATE users SET password_hash = ${passwordHash}, updated_at = NOW() WHERE id = ${record.user_id}`);
  await db.execute(sql`UPDATE password_reset_tokens SET used_at = NOW() WHERE id = ${record.id}`);
  await db.execute(sql`DELETE FROM session WHERE sess->>'userId' = ${String(record.user_id)}`);

  res.json({ ok: true });
});

export default router;
