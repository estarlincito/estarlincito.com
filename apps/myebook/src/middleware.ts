import { middlewareConfig } from '@repo/lib';
import { type NextRequest, NextResponse } from 'next/server';

export const { config } = middlewareConfig;

export const middleware = (req: NextRequest) => {
  const res = NextResponse.next();

  res.headers.set('x-pathname', req.nextUrl.pathname);

  return res;
};
