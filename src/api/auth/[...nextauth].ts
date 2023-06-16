import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { Session, User } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  // const someCookie = req.cookies["some-custom-cookie"]
  const someCookie = "some-custom-cookie";

  console.log(someCookie);
  return await NextAuth(req, res, {
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID || "",
        clientSecret: process.env.GITHUB_SECRET || "",
      }),
    ],
    adapter: PrismaAdapter(prisma),
  });
}
