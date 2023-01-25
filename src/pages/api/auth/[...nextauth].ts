import { env } from "@/env/server"
import NextAuth, { AuthOptions } from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"

export const authOptions: AuthOptions = {
  providers: [
    FacebookProvider({
      clientId: env.FACEBOOK_CLIENT_ID,
      clientSecret: env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string
      return session;
    }
  }
}

export default NextAuth(authOptions)