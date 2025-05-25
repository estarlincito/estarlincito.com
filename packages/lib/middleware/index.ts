import { auth } from '@repo/lib/middleware/auth';

export const middlewareConfig = {
  auth,
  config: {
    matcher: ['/((?!_next|favicon.ico).*)'],
  },
};
