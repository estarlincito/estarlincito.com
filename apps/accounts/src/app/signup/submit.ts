import { apiFetch, type Resmsg } from '@estarlincito/utils';
import { accounts } from '@repo/constants';
import { redirect } from 'next/navigation';
import { type SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';

import { InputSignup } from './form';

const onSubmit: SubmitHandler<InputSignup> = async (data) => {
  const res = await apiFetch({
    body: JSON.stringify(data),
    method: 'POST',
    url: accounts.endpoint.signup,
  });

  const { message } = (await res.json()) as Resmsg;

  if (message === 'User has been successfully created') {
    redirect('/');
  } else {
    toast(message);
  }
};

export default onSubmit;
