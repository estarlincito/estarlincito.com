import { apiFetch, num, type ResmsgTypes } from '@estarlincito/utils';
import { accounts } from '@repo/constants';
import type { SubmitHandler, UseFormSetError } from 'react-hook-form';
import toast from 'react-hot-toast';
const { endpoint } = accounts;

import { redirect } from 'next/navigation';

import { signinSchema } from '@/schema/signin';

import type { InputSignin } from '../signin/form';

const onSubmit =
  (setError: UseFormSetError<InputSignin>): SubmitHandler<InputSignin> =>
  async (data) => {
    // Getting redirect url
    let _redirect = '';

    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      const url = searchParams.get('redirect');
      if (url) _redirect = `?redirect=${url}`;
    }

    // Validating user data
    const safeData = signinSchema.safeParse(data);
    if (!safeData.success) {
      safeData.error.issues.forEach(({ code, message, path }) => {
        setError(path[num('0')] as keyof InputSignin, {
          message,
          type: code,
        });
      });
    }

    // Sending user request
    const res = await apiFetch({
      body: JSON.stringify(data),
      method: 'POST',
      url: `${endpoint.signin}${_redirect}`,
    });

    const { message, success } = (await res.json()) as ResmsgTypes['Resmsg'];

    if (success) {
      redirect(_redirect || '/profile');
    } else {
      toast.error(message);
    }

    return { message };
  };

export default onSubmit;
