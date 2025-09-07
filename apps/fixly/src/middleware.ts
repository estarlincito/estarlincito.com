import { handleAuth } from '@repo/utils/middleware/auth';
import { handleLocale } from '@repo/utils/middleware/locale';
import { type NextRequest } from 'next/server';

export const config = {
  matcher: ['/((?!_next|api|assets|favicon.ico|shortcut-icon.png).*)'],
};

export default (req: NextRequest) => {
  const res = handleLocale(req);
  if (res.headers.get('Location')) return res;

  return handleAuth(req, res, {
    protectedRoutes: ['/invoice', '/invoice/print'],
    publicRoutes: ['/admin'],
    redirectTo: '/invoice',
    signinURL: '/admin',
  });
};
