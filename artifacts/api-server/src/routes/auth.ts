import { Router } from "express";
import { rateLimit } from "express-rate-limit";
import { db } from "@workspace/db";
import { usersTable, progressTable, registerSchema, loginSchema } from "@workspace/db";
import { eq } from "drizzle-orm";
import { hashPassword, verifyPassword } from "../lib/crypto";

const router = Router();

declare module "express-session" {
  interface SessionData {
    userId: number;
    userName: string;
    userEmail: string;
    isAdmin: boolean;
  }
}

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true,
  message: { error: "Muitas tentativas. Aguarde 15 minutos e tente novamente." },
});

router.post("/register", authLimiter, async (req, res) => {
  const result = registerSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({ error: result.error.issues[0]?.message ?? "Dados inválidos" });
    return;
  }

  const { name, email, password } = result.data;

  const existing = await db.select().from(usersTable).where(eq(usersTable.email, email.toLowerCase())).limit(1);
  if (existing.length > 0) {
    res.status(409).json({ error: "E-mail já cadastrado" });
    return;
  }

  const passwordHash = await hashPassword(password);
  const [user] = await db.insert(usersTable).values({
    name,
    email: email.toLowerCase(),
    passwordHash,
  }).returning({ id: usersTable.id, name: usersTable.name, email: usersTable.email, isAdmin: usersTable.isAdmin });

  if (!user) {
    res.status(500).json({ error: "Erro ao criar conta" });
    return;
  }

  await db.insert(progressTable).values({ userId: user.id });

  req.session.userId = user.id;
  req.session.userName = user.name;
  req.session.userEmail = user.email;
  req.session.isAdmin = user.isAdmin;

  res.status(201).json({ id: user.id, name: user.name, email: user.email, isAdmin: user.isAdmin });
});

router.post("/login", authLimiter, async (req, res) => {
  const result = loginSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({ error: result.error.issues[0]?.message ?? "Dados inválidos" });
    return;
  }

  const { email, password } = result.data;

  const [user] = await db.select().from(usersTable).where(eq(usersTable.email, email.toLowerCase())).limit(1);
  if (!user) {
    res.status(401).json({ error: "E-mail ou senha incorretos" });
    return;
  }

  const valid = await verifyPassword(password, user.passwordHash);
  if (!valid) {
    res.status(401).json({ error: "E-mail ou senha incorretos" });
    return;
  }

  req.session.userId = user.id;
  req.session.userName = user.name;
  req.session.userEmail = user.email;
  req.session.isAdmin = user.isAdmin;

  res.json({ id: user.id, name: user.name, email: user.email, isAdmin: user.isAdmin });
});

router.post("/logout", (req, res) => {
  req.session.destroy(() => {
    res.json({ ok: true });
  });
});

router.get("/me", async (req, res) => {
  if (!req.session.userId) {
    res.status(401).json({ error: "Não autenticado" });
    return;
  }
  res.json({
    id: req.session.userId,
    name: req.session.userName,
    email: req.session.userEmail,
    isAdmin: req.session.isAdmin ?? false,
  });
});

export default router;
