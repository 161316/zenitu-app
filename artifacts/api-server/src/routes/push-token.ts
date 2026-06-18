import { Router } from "express";
import { z } from "zod/v4";
import { db } from "@workspace/db";
import { usersTable } from "@workspace/db";
import { eq } from "drizzle-orm";

const router = Router();

function requireAuth(req: any, res: any, next: any) {
  if (!req.session?.userId) {
    res.status(401).json({ error: "Não autenticado" });
    return;
  }
  next();
}

const pushTokenSchema = z.object({
  token: z.string().max(512).nullable().optional(),
  enabled: z.boolean(),
});

router.post("/push-token", requireAuth, async (req, res) => {
  const result = pushTokenSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({ error: result.error.issues[0]?.message ?? "Dados inválidos" });
    return;
  }

  const { token, enabled } = result.data;
  const userId = req.session.userId as number;

  await db
    .update(usersTable)
    .set({
      pushToken: token ?? undefined,
      pushNotificationsEnabled: enabled,
      updatedAt: new Date(),
    })
    .where(eq(usersTable.id, userId));

  res.json({ ok: true });
});

export default router;
