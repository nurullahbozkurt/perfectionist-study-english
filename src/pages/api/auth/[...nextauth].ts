import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import bcrypt from "bcrypt";
import User from '../../../../modals/user'
import connectMongoDB from '../../../../lib/mongodb'
import { useState } from "react";
import { sign } from "jsonwebtoken";



export const authOptions: NextAuthOptions = {

  session:{
  strategy: 'jwt',
 },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials: Record<string, string> | undefined, req: any) {
        if (!credentials) return null; // handle undefined credentials
        connectMongoDB()
        const { email, password } = credentials;
        const user = await User.findOne({
          email: email
        })
        if(!user) {
          throw new Error("Hatalı şifre veya email")
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid) {
          throw new Error("Hatalı şifre veya email")
        }
        return {
          email: user.email,
          name: user.firstName,
          lastName: user.lastName,
          id: user._id,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user}) {
      return {
        ...token,
        ...user
      };
    },
    async session({session,token}) {
      session.user = token as any;
        return session;
    },

  },
  
  pages: {
    signIn: "/auth/login",  
  },
  
};

export default NextAuth(authOptions);
