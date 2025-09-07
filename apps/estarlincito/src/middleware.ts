import { handleLocale } from '@repo/utils/middleware/locale';
import { type NextRequest } from 'next/server';

export const config = {
  matcher: ['/((?!_next|api|assets|favicon.ico|shortcut-icon.png).*)'],
  runtime: 'nodejs',
};

export default (req: NextRequest) => handleLocale(req);
