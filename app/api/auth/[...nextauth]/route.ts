import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    })
  ]
};

export const GET = NextAuth(authOptions); // Exporta o método GET
export const POST = NextAuth(authOptions); // Exporta o método POST 
