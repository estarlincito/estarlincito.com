'use client';
import submit from '@app/accounts/app/signup/submit';
import { Triggers } from '@app/accounts/components/ui/triggers';
import { SIGNIN_ROUTE, SIGNIN_TITLE } from '@app/accounts/constants/signin';
import {
  SIGNUP_DESCRIPTION,
  SIGNUP_TITLE,
} from '@app/accounts/constants/signup';
import { signoutSchema } from '@app/accounts/schema/signout';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@repo/ui/components/form';
import { Heading } from '@repo/ui/components/heading';
import { Summary } from '@repo/ui/components/summary';
import { useClient } from '@repo/ui/hooks/useClient';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

const SignupForm = () => {
  const form = useForm<z.infer<typeof signoutSchema>>({
    defaultValues: {
      email: '',
      'first-name': '',
      'last-name': '',
      password: '',
      username: '',
    },
    resolver: zodResolver(signoutSchema),
  });
  const isClient = useClient();

  let redirect = '';

  if (isClient) {
    const searchParams = new URLSearchParams(window.location.search);
    const url = searchParams.get('redirect');
    if (url) redirect = `?redirect=${url}`;
  }

  return (
    <Form form={form} submit={submit}>
      <Heading as='h3' content={SIGNUP_TITLE} />
      <Summary content={SIGNUP_DESCRIPTION} />

      <Form.Field control={form.control} name='first-name' />
      <Form.Field control={form.control} name='last-name' />
      <Form.Field control={form.control} name='username' />
      <Form.Field control={form.control} name='email' />
      <Form.Field control={form.control} name='password' />

      <Triggers
        label={SIGNIN_TITLE}
        route={SIGNIN_ROUTE + redirect}
        submitLabel={SIGNUP_TITLE}
      />
    </Form>
  );
};

export default SignupForm;
