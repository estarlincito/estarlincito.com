import { handleAuth } from '@repo/lib/middleware/auth';
import { handleLocale } from '@repo/lib/middleware/locale';
import { type NextRequest } from 'next/server';

export const config = {
  matcher: ['/((?!_next|api|assets|favicon.ico).*)'],
};

export default (req: NextRequest) => {
  const res = handleLocale(req);
  if (res.headers.get('Location')) return res;

  return handleAuth(req, res, {
    protectedRoutes: ['/', '/profile'],
    publicRoutes: ['/signin', '/signup', '/contact'],
    redirectTo: '/profile',
    signinURL: '/signin',
  });
};
