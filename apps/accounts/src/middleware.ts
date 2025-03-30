import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { decrypt } from '@/lib/session';

//Specify protected and public routes
const protectedRoutes = ['/'];
const publicRoutes = ['/signin', '/signup'];

const middleware = async (req: NextRequest): Promise<NextResponse<unknown>> => {
  // Check if the current route is protected or public
  const { pathname } = req.nextUrl;

  const isProtectedRoute = protectedRoutes.includes(pathname);
  const isPublicRoute = publicRoutes.includes(pathname);

  // Decrypt the session from the cookie
  const cookie = (await cookies()).get('session')?.value;
  const session = await decrypt(cookie);

  //  Redirect login
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL('/signin', req.nextUrl));
  }

  //  Redirect login /
  if (isPublicRoute && session?.userId) {
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }

  return NextResponse.next();
};

export default middleware;
