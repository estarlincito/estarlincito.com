'use client';
import { Triggers } from '@app/accounts/components/ui/triggers';
import { SIGNUP_API } from '@app/accounts/constants/paths';
import { SIGNIN_ROUTE, SIGNIN_TITLE } from '@app/accounts/constants/signin';
import {
  SIGNUP_DESCRIPTION,
  SIGNUP_TITLE,
} from '@app/accounts/constants/signup';
import { signoutSchema } from '@app/accounts/schema/signout';
import { apiFetch } from '@estarlincito/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@repo/ui/components/form';
import { Heading } from '@repo/ui/components/heading';
import { Summary } from '@repo/ui/components/summary';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

export const SignupForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get redirect URL from query parameters
  const redirectParam = useMemo(
    () => searchParams?.get('redirect') ?? '',
    [searchParams],
  );

  const redirectUrl = useMemo(
    () => (redirectParam ? `?redirect=${redirectParam}` : ''),
    [redirectParam],
  );

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

  const onSubmit = async (values: z.infer<typeof signoutSchema>) => {
    // Sending user request
    const res = await apiFetch({
      body: JSON.stringify(values),
      method: 'POST',
      url: `${SIGNUP_API}${redirectUrl}`,
    });

    if (res.ok) {
      router.push(redirectParam || '/profile');
    } else {
      // toast.error(message);
    }
  };

  return (
    <Form className='w-full max-w-md' form={form} submit={onSubmit}>
      <Heading as='h3' content={SIGNUP_TITLE} />
      <Summary content={SIGNUP_DESCRIPTION} />

      <Form.Field control={form.control} name='first-name' />
      <Form.Field control={form.control} name='last-name' />
      <Form.Field control={form.control} name='username' />
      <Form.Field control={form.control} name='email' />
      <Form.Field control={form.control} name='password' type='password' />

      <Triggers
        label={SIGNIN_TITLE}
        loading={form.formState.isSubmitting}
        route={SIGNIN_ROUTE + redirectUrl}
        submitLabel={SIGNUP_TITLE}
      />
    </Form>
  );
};
