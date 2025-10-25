import { betterAuth } from "better-auth";
import Database from "better-sqlite3";

export const auth = betterAuth({
  trustedOrigins: ["http://localhost:5173"],
  database: new Database("./sqlite.db"),
  emailAndPassword: {
    enabled: true,
  },
});
