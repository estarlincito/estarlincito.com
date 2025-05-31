'use client';
import { Triggers } from '@app/accounts/components/ui/triggers';
import { SIGNIN_API } from '@app/accounts/constants/paths';
import {
  SIGNIN_DESCRIPTION,
  SIGNIN_TITLE,
} from '@app/accounts/constants/signin';
import { SIGNUP_ROUTE, SIGNUP_TITLE } from '@app/accounts/constants/signup';
import { signinSchema } from '@app/accounts/schema/signin';
import { apiFetch } from '@estarlincito/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@repo/ui/components/form';
import { Heading } from '@repo/ui/components/heading';
import { Summary } from '@repo/ui/components/summary';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

export const SigninForm = () => {
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

  const form = useForm<z.infer<typeof signinSchema>>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(signinSchema),
  });

  const onSubmit = async (values: z.infer<typeof signinSchema>) => {
    const res = await apiFetch({
      body: JSON.stringify(values),
      method: 'POST',
      url: `${SIGNIN_API}${redirectUrl}`,
    });

    if (res.ok) {
      router.push(redirectParam || '/profile');
    } else {
      // toast.error(await res.json());
    }
  };

  return (
    <Form className='w-full max-w-md' form={form} submit={onSubmit}>
      <Heading as='h3' content={SIGNIN_TITLE} />
      <Summary content={SIGNIN_DESCRIPTION} />

      <Form.Field control={form.control} name='email' />
      <Form.Field control={form.control} name='password' type='password' />

      <Triggers
        label={SIGNUP_TITLE}
        loading={form.formState.isSubmitting}
        route={SIGNUP_ROUTE + redirectUrl}
        submitLabel={SIGNIN_TITLE}
      />
    </Form>
  );
};
