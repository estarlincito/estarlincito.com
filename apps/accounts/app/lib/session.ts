import { throwAppError } from '@estarlincito/utils';
import { type JWTPayload, jwtVerify, SignJWT } from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const secretKey = process.env.SECRET;
const key = new TextEncoder().encode(secretKey);
const isProduction = process.env.NODE_ENV === 'production';

const options = {
  domain: isProduction ? '.estarlincito.com' : 'localhost',
  httpOnly: true,
  path: '/',
  sameSite: isProduction ? ('none' as const) : ('lax' as const),
  secure: isProduction,
};

export const encrypt = async (payload: JWTPayload): Promise<string> =>
  new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
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
    return throwAppError('There was an issue with your session.');
  }
};

export const createSession = async (userId: string): Promise<void> => {
  /** 24 hours from now */
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const session = await encrypt({ expiresAt, userId });

  (await cookies()).set('session', session, {
    ...options,
    expires: expiresAt,
  });
};

export const deleteSession = async (): Promise<void> => {
  (await cookies()).delete('session');
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

// export const updateSession = async (): Promise<null> => {
//   const session = (await cookies()).get('session')?.value;
//   const payload = await decrypt(session);

//   if (!session || !payload) {
//     return null;
//   }

//   const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
//   (await cookies()).set('session', session, {
//     ...options,
//     expires,
//   });

//   return null;
// };

// Remember me
