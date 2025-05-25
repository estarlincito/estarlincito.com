/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { decrypt } from '@repo/lib/middleware/decrypt';
import { z } from 'zod';

const dataSchema = z.object({
  protectedRoutes: z.array(z.string()),
  publicRoutes: z.array(z.string()),
  redirectURL: z.string(),
  signinURL: z.string(),
});

interface Req {
  nextUrl: URL;

  cookies: Function;
}

interface Res {
  headers: Headers;
  redirect: (url: URL) => Res;
  next: () => Res;
}

export const auth = async <R, C, N>(
  _req: R,
  _cookies: C,
  _NextResponse: N,
  data: z.infer<typeof dataSchema>,
): Promise<unknown> => {
  const { protectedRoutes, publicRoutes, redirectURL, signinURL } =
    dataSchema.parse(data);

  const req = _req as Req;
  const cookies = _cookies as Req['cookies'];
  const NextResponse = _NextResponse as Res;

  // Check if the current route is protected or public
  const { pathname } = req.nextUrl;

  const isProtectedRoute = protectedRoutes.includes(pathname);
  const isPublicRoute = publicRoutes.includes(pathname);

  // Decrypt the session from the cookie
  const cookie = (await cookies()).get('session')?.value;

  const session = await decrypt(cookie);

  // Redirect signinURL
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL(signinURL, req.nextUrl));
  }

  // Redirect to redirectURL
  if (isPublicRoute && session?.userId) {
    return NextResponse.redirect(new URL(redirectURL, req.nextUrl));
  }

  const res = NextResponse.next();
  res.headers.set('x-pathname', req.nextUrl.pathname);

  return res;
};
