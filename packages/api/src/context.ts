import { auth } from "@thebeststack/auth";
import { fromNodeHeaders } from "better-auth/node";
import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";

export async function createContext(options: CreateExpressContextOptions) {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(options.req.headers),
  });
  return {
    auth: null,
    session,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
