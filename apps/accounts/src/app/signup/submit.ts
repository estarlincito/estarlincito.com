import { apiFetch, num, type ResmsgTypes } from '@estarlincito/utils';
import { accounts } from '@repo/constants';
import { redirect } from 'next/navigation';
import { type SubmitHandler, type UseFormSetError } from 'react-hook-form';
import toast from 'react-hot-toast';

import { signoutSchema } from '@/schema/signout';

import type { InputSignup } from './form';

const onSubmit =
  (setError: UseFormSetError<InputSignup>): SubmitHandler<InputSignup> =>
  async (data) => {
    // Getting redirect url
    let _redirect = '';

    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      const url = searchParams.get('redirect');
      if (url) _redirect = `?redirect=${url}`;
    }
    // Validating user data
    const safeData = signoutSchema.safeParse(data);
    if (!safeData.success) {
      safeData.error.issues.forEach(({ code, message, path }) => {
        setError(path[num('0')] as keyof InputSignup, {
          message,
          type: code,
        });
      });
    }
    // Sending user request
    const res = await apiFetch({
      body: JSON.stringify(data),
      method: 'POST',
      url: `${accounts.endpoint.signup}${_redirect}`,
    });

    const { message, success } = (await res.json()) as ResmsgTypes['Resmsg'];

    if (success) {
      redirect(_redirect || '/profile');
    } else {
      toast.error(message);
    }
  };

export default onSubmit;
