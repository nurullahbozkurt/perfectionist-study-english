import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      name: string
      lastName: string
      email: string
      sub: string
      id: string
      iat: number
      exp: number
      jti: string
      role: string
    }
  }
}