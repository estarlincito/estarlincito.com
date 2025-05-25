import { decrypt } from '@app/accounts/lib/session';
import { middlewareConfig } from '@repo/lib/middleware';
import { cookies } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';

export const { config } = middlewareConfig;

// Specify protected and public routes
const protectedRoutes = ['/', '/profile'];
const publicRoutes = ['/signin', '/signup'];

const middleware = async (req: NextRequest): Promise<NextResponse<unknown>> => {
  // Check if the current route is protected or public
  const { pathname, searchParams } = req.nextUrl;
  const redirect = searchParams.get('redirect');

  const isProtectedRoute = protectedRoutes.includes(pathname);
  const isPublicRoute = publicRoutes.includes(pathname);

  // Decrypt the session from the cookie
  const cookie = (await cookies()).get('session')?.value;
  const session = await decrypt(cookie);

  // Redirect login
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL('/signin', req.nextUrl));
  }

  // Redirect to profile / redirect to searchParams
  if (isPublicRoute && session?.userId) {
    return NextResponse.redirect(new URL(redirect ?? '/profile', req.nextUrl));
  }
  const res = NextResponse.next();
  res.headers.set('x-pathname', req.nextUrl.pathname);
  return res;
};

export default middleware;
