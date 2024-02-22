import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    Credentials({
      // The name to display on the sign-in form
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        /**
         * Validate credentials
         *
         * If the credentials are valid, the function should return an object that contains the user's information.
         * If the credentials are invalid, the function should return null.
         *
         * TODO: Replace temporary credentials with a real database query
         */
        if (
          credentials.username !== "someonesusername" &&
          credentials.password !== "someonespassword"
        ) {
          return null;
        }

        return {} as User;
      },
    }),
  ],
});
