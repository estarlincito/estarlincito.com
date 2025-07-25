import 'server-only';

import { decrypt } from '@repo/lib/middleware/decrypt';
import { cookies } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';

interface Options {
  protectedRoutes: string[];
  publicRoutes: string[];
  redirectTo: string;
  signinURL: string;
}
export const handleAuth = async (
  req: NextRequest,
  res: NextResponse,
  options: Options,
): Promise<unknown> => {
  const { pathname } = req.nextUrl;
  const pathSegments = pathname.split('/').filter(Boolean);
  const subpath = pathSegments.slice(1).join('/');
  const basePath = `/${subpath ?? ''}`;
  const locale = pathSegments[0] ?? 'en';

  const isProtectedRoute = options.protectedRoutes.includes(basePath);
  const isPublicRoute = options.publicRoutes.includes(basePath);

  if (isProtectedRoute || isPublicRoute) {
    const cookie = (await cookies()).get('session')?.value;
    const session = await decrypt(cookie);

    if (isProtectedRoute && !session?.userId) {
      const signinUrl = new URL(`${locale}${options.signinURL}`, req.nextUrl);
      signinUrl.searchParams.set('redirect', req.nextUrl.pathname);
      return NextResponse.redirect(signinUrl);
    }

    // If user is logged in and visits a public route (e.g., /signin or /signup)
    if (isPublicRoute && session?.userId) {
      // Get the redirect param from the URL (e.g., ?redirect=/dashboard)
      const redirectParam = req.nextUrl.searchParams.get('redirect');
      let redirectUrl: URL;

      if (redirectParam) {
        try {
          // Build absolute URL from the redirect param
          redirectUrl = new URL(redirectParam, req.nextUrl);

          // Allow redirect only if host matches current or is explicitly allowed
          const isAllowedHost =
            redirectUrl.hostname === req.nextUrl.hostname ||
            redirectUrl.hostname.endsWith('.estarlincito.com') ||
            redirectUrl.hostname === 'estarlincito.com';

          if (!isAllowedHost) {
            redirectUrl = new URL(
              `${locale}${options.redirectTo}`,
              req.nextUrl,
            );
          }
        } catch {
          // If redirect param is invalid, fallback to default redirect
          redirectUrl = new URL(`${locale}${options.redirectTo}`, req.nextUrl);
        }
      } else {
        // No redirect param, fallback to default redirect
        redirectUrl = new URL(`${locale}${options.redirectTo}`, req.nextUrl);
      }
      // Perform redirect
      return NextResponse.redirect(redirectUrl);
    }
  }

  return res;
};
