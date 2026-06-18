import { pgTable, text, serial, timestamp, jsonb, boolean, integer, uniqueIndex } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  isAdmin: boolean("is_admin").default(false).notNull(),
  pushToken: text("push_token"),
  pushNotificationsEnabled: boolean("push_notifications_enabled").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const progressTable = pgTable("user_progress", {
  id: serial("id").primaryKey(),
  userId: serial("user_id").references(() => usersTable.id, { onDelete: "cascade" }).notNull(),
  xp: text("xp").default("0").notNull(),
  completedLessons: jsonb("completed_lessons").$type<string[]>().default([]).notNull(),
  completedChallenges: jsonb("completed_challenges").$type<string[]>().default([]).notNull(),
  streak: text("streak").default("0").notNull(),
  lastActivityDate: text("last_activity_date").default("").notNull(),
  badges: jsonb("badges").$type<string[]>().default([]).notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const lessonQuestionResultsTable = pgTable(
  "lesson_question_results",
  {
    id: serial("id").primaryKey(),
    userId: integer("user_id")
      .references(() => usersTable.id, { onDelete: "cascade" })
      .notNull(),
    moduleId: text("module_id").notNull(),
    lessonId: text("lesson_id").notNull(),
    questionIndex: integer("question_index").notNull(),
    isCorrect: boolean("is_correct").notNull(),
    questionType: text("question_type").notNull().default("objective"),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (t) => [
    uniqueIndex("lesson_question_results_unique").on(
      t.userId,
      t.moduleId,
      t.lessonId,
      t.questionIndex,
    ),
  ],
);

export const insertUserSchema = createInsertSchema(usersTable).omit({ id: true, createdAt: true, updatedAt: true });
export const selectUserSchema = createSelectSchema(usersTable);

export const registerSchema = z.object({
  name: z.string().min(2, "Nome deve ter ao menos 2 caracteres").max(100),
  email: z.string().email("E-mail inválido"),
  password: z.string().min(8, "Senha deve ter ao menos 8 caracteres").max(72),
});

export const loginSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(1, "Senha obrigatória"),
});

export type User = typeof usersTable.$inferSelect;
export type InsertUser = typeof usersTable.$inferInsert;
export type UserProgress = typeof progressTable.$inferSelect;
export type LessonQuestionResult = typeof lessonQuestionResultsTable.$inferSelect;
