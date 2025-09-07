import 'server-only';

import { throwAppError } from '@estarlincito/utils';
import { type JWTPayload, jwtVerify } from 'jose';

const secretKey = (() => {
  const secret = process.env.SECRET;
  if (!secret) throwAppError('Be sure, secret is define in .env');

  return secret;
})();

const key = new TextEncoder().encode(secretKey);

export const decrypt = async (
  session: string | undefined = '',
): Promise<JWTPayload | null> => {
  if (!session) {
    return null;
  }

  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ['HS256'],
    });

    return payload;
  } catch {
    return throwAppError('There was an issue with your session.');
  }
};
