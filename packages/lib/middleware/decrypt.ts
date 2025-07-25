import 'server-only';

import { throwAppError } from '@estarlincito/utils';
import { type JWTPayload, jwtVerify } from 'jose';
const secretKey = process.env.SECRET;

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
