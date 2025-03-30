import { resmsg } from '@estarlincito/utils';
import { cookies } from 'next/headers';

export const POST = async (): Promise<Response> => {
  (await cookies()).delete('session');

  return resmsg({
    code: 200,
    message: 'Session has been successfully removed',
    success: true,
  });
};
