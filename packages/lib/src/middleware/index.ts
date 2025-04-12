import { auth } from './auth.js';

export const middlewareConfig = {
  auth,
  config: {
    matcher: ['/((?!_next|favicon.ico).*)'],
  },
};
