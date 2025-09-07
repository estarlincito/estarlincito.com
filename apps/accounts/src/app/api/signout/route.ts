import { cookies } from 'next/headers';
import { Resuponsu } from 'resuponsu';

export const POST = async (): Promise<Response> => {
  (await cookies()).delete('session');

  return Resuponsu.json({
    code: 200,
    message: 'Session has been successfully removed',
    success: true,
  });
};
