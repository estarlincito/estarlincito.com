import { handleError, num } from '@estarlincito/utils';
import { type JWTPayload, jwtVerify, SignJWT } from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const secretKey = process.env.SECRET;
const key = new TextEncoder().encode(secretKey);

const options = {
  domain: '.estarlincito.com',
  httpOnly: true,
  path: '/',
  sameSite: 'none' as const,
  secure: process.env.NODE_ENV === 'production',
};

export const encrypt = async (payload: JWTPayload): Promise<string> =>
  new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1hr')
    .sign(key);

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
    return handleError('There was an issue with your session.');
  }
};

export const createSession = async (userId: string): Promise<void> => {
  const expiresAt = new Date(Date.now() + num('60') * num('60') * num('1000'));
  const session = await encrypt({ expiresAt, userId });

  (await cookies()).set('session', session, {
    ...options,
    expires: expiresAt,
  });
};

export const verifySession = async (): Promise<{
  isAuth: boolean;
  userId: number;
}> => {
  const cookie = (await cookies()).get('session')?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) {
    redirect('/signin');
  }

  return { isAuth: true, userId: Number(session.userId) };
};

export const updateSession = async (): Promise<null> => {
  const session = (await cookies()).get('session')?.value;
  const payload = await decrypt(session);

  if (!session || !payload) {
    return null;
  }

  const expires = new Date(
    Date.now() + num('7') * num('24') * num('60') * num('60') * num('1000'),
  );
  (await cookies()).set('session', session, {
    ...options,
    expires,
  });

  return null;
};

export const deleteSession = async (): Promise<void> => {
  (await cookies()).delete('session');
};
