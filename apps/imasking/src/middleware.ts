import { handleLocale } from '@repo/lib/middleware/locale';
import { type NextRequest } from 'next/server';

export const config = {
  matcher: ['/((?!_next|api|assets|favicon.ico).*)'],
};

export default (req: NextRequest) => handleLocale(req);
