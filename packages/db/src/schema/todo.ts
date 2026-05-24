import { pgTable, text, boolean, serial } from "drizzle-orm/pg-core";

// comment

export const todo = pgTable("todo", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
  completed: boolean("completed").default(false).notNull(),
});
