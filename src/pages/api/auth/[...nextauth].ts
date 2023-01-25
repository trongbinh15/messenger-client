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
    jwt({ token }) {
      return token;
    },
    session({ session }) {
      return session;
    }
  }
}

export default NextAuth(authOptions)