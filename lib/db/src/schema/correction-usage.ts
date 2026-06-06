import { pgTable, serial, integer, date, uniqueIndex } from "drizzle-orm/pg-core";
import { usersTable } from "./users";

export const correctionUsageTable = pgTable(
  "correction_usage",
  {
    id: serial("id").primaryKey(),
    userId: integer("user_id")
      .references(() => usersTable.id, { onDelete: "cascade" })
      .notNull(),
    usageDate: date("usage_date", { mode: "string" }).notNull(),
    callCount: integer("call_count").notNull().default(0),
  },
  (table) => [uniqueIndex("correction_usage_user_date_idx").on(table.userId, table.usageDate)],
);

export type CorrectionUsage = typeof correctionUsageTable.$inferSelect;
