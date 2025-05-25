import { SIGNUP_API } from '@app/accounts/constants/paths';
import type { signoutSchema } from '@app/accounts/schema/signout';
import { apiFetch, type ResmsgTypes } from '@estarlincito/utils';
import { redirect } from 'next/navigation';
import { toast } from 'sonner';
import type { z } from 'zod';

const submit = async (values: z.infer<typeof signoutSchema>) => {
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
    url: `${SIGNUP_API}${_redirect}`,
  });

  const { message, success } = (await res.json()) as ResmsgTypes['Resmsg'];

  if (success) {
    redirect(_redirect || '/profile'); // try to get that value from the response
  } else {
    toast.error(message);
  }
};

export default submit;
