'use client';
import { submit } from '@app/accounts/app/signin/submit';
import { Triggers } from '@app/accounts/components/ui/triggers';
import {
  SIGNIN_DESCRIPTION,
  SIGNIN_TITLE,
} from '@app/accounts/constants/signin';
import { SIGNUP_ROUTE, SIGNUP_TITLE } from '@app/accounts/constants/signup';
import { signinSchema } from '@app/accounts/schema/signin';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@repo/ui/components/form';
import { Heading } from '@repo/ui/components/heading';
import { Summary } from '@repo/ui/components/summary';
import { useClient } from '@repo/ui/hooks/useClient';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

export const SigninForm = () => {
  const form = useForm<z.infer<typeof signinSchema>>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(signinSchema),
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
      <Heading as='h3' content={SIGNIN_TITLE} />
      <Summary content={SIGNIN_DESCRIPTION} />

      <Form.Field control={form.control} name='email' />
      <Form.Field control={form.control} name='password' />

      <Triggers
        label={SIGNUP_TITLE}
        route={SIGNUP_ROUTE + redirect}
        submitLabel={SIGNIN_TITLE}
      />
    </Form>
  );
};
