import { apiFetch, type Resmsg } from '@estarlincito/utils';
import { accounts } from '@repo/constants';
import { redirect } from 'next/navigation';
import { type SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
const { endpoint } = accounts;

import { InputSignin } from './form';

const onSubmit: SubmitHandler<InputSignin> = async (data) => {
  const res = await apiFetch({
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
    method: 'POST',
    url: endpoint.signin,
  });

  const { message, success } = (await res.json()) as Resmsg;

  if (!success) {
    //in this may I need to change the message directly of the input like your password is correct....
    toast.error('');
  }

  if (success) {
    redirect('/');
  }

  return { message };
};

export default onSubmit;
