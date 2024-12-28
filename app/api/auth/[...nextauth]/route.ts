import NextAuth, { NextAuthOptions  } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      fullName: string;
    };
  }

  interface User {
    id: string;
    email: string;
    fullName: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
    fullName: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          const response = await fetch(`${process.env.NEXTAUTH_URL}/api/login/`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password
            })
          });

          if (!response.ok) {
            console.error("Failed to authorize user.");
            return null;
          }

          return await response.json();
        } catch (error) {
          console.error("Error during authorization:", error);
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (!user) {
        return token;
      }

      token.id = user.id;
      token.email = user.email;
      token.fullName = user.fullName;
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.fullName = token.fullName;

      return session;
    }
  },
  pages: {
    signIn: "/login",
  }
};

export default NextAuth(authOptions);