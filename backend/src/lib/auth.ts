import { betterAuth } from "better-auth";
import Database from "better-sqlite3";
import { sendEmail } from "./email.js";

export const auth = betterAuth({
  trustedOrigins: ["http://localhost:5173"],
  database: new Database("./sqlite.db"),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url }) => {
      await sendEmail(user.email, "test", `${url}`);
    },
    async afterEmailVerification(user) {
      console.log(`${user.email} has been successfully verified!`);
    },
  },
});
