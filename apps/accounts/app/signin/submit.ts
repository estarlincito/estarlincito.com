import { SIGNIN_API } from '@app/accounts/constants/paths';
import type { signinSchema } from '@app/accounts/schema/signin';
import { apiFetch, type ResmsgTypes } from '@estarlincito/utils';
import { redirect } from 'next/navigation';
import { toast } from 'sonner';
import type { z } from 'zod';

export const submit = async (values: z.infer<typeof signinSchema>) => {
  // Getting redirect url
  let _redirect = '';

  if (typeof window !== 'undefined') {
    const searchParams = new URLSearchParams(window.location.search);
    const url = searchParams.get('redirect');
    if (url) _redirect = `?redirect=${url}`;
  }

  // Sending user request
  const res = await apiFetch({
    body: JSON.stringify(values),
    method: 'POST',
    url: `${SIGNIN_API}${_redirect}`,
  });

  const { message, success } = (await res.json()) as ResmsgTypes['Resmsg'];

  if (success) {
    redirect(_redirect || '/profile'); // try to get this value from the response
  } else {
    toast.error(message);
  }

  // return { message };
};
