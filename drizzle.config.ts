import type { Config } from "drizzle-kit";

export default {
  dialect: "sqlite",
  schema: "./db/schema",
  out: "./db/migrations",
  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
} satisfies Config;
