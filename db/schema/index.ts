import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const aes = sqliteTable("aes", {
  id: integer("id").notNull().primaryKey().unique(),
  scientific_name: text("scientific_name").unique().notNull(),
  conservation_status: text("conservation_status", {
    enum: ["EX", "EW", "CR", "EN", "VU", "NT", "LC", "DD", "NE"],
  }).notNull(),
  group: text("group").notNull(),
  iso_code: text("iso_code").notNull(),
  common_name: text("common_name").notNull(),
});
