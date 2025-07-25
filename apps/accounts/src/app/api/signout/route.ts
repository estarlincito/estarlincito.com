import { ApiResponse } from '@estarlincito/utils';
import { cookies } from 'next/headers';

export const POST = async (): Promise<Response> => {
  (await cookies()).delete('session');

  return ApiResponse.json({
    code: 200,
    message: 'Session has been successfully removed',
    success: true,
  });
};
