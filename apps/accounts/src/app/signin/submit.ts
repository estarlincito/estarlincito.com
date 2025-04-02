import { apiFetch, type Resmsg } from '@estarlincito/utils';
import { accounts } from '@repo/constants';
import { type SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
const { endpoint } = accounts;

import { redirect } from 'next/navigation';

import { InputSignin } from './form';

const onSubmit: SubmitHandler<InputSignin> = async (data) => {
  const searchParams = new URLSearchParams(window.location.search);
  const _redirect = searchParams.get('redirect');

  const res = await apiFetch({
    body: JSON.stringify(data),
    method: 'POST',
    url: `${endpoint.signin}${_redirect ? `?redirect=${encodeURIComponent(_redirect)}` : ''}`,
  });

  const { message, success } = (await res.json()) as Resmsg;

  if (success) {
    redirect(_redirect || '/profile');
  } else {
    toast.error(message);
  }

  return { message };
};

export default onSubmit;
