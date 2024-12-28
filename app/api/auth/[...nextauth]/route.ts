import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
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
          
          if(! await response.ok){
            return null; 
          }
          
          const user = await response.json();
          
          return user;
        } catch(Error) {
          console.error(Error);
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user}){
      if(!user){
        return token;
      }

      token.id = user.id;
      token.email = user.email;
      token.fullName = user.fullName;
      return token;
    },

    async session({ session, token }){
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

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };