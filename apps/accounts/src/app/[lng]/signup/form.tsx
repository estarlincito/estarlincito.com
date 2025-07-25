'use client';
import { apiFetch } from '@estarlincito/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import type { SignupContent } from '@repo/content/accounts/signup';
import { createTranslator } from '@repo/content/utils/translator';
import { SignoutFields } from '@repo/lib/fields/signout';
import { type Signout, SignoutSchema } from '@repo/lib/schemas/signout';
import { Form } from '@repo/ui/components/form';
import { Heading } from '@repo/ui/components/heading';
import { Summary } from '@repo/ui/components/summary';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { FormTrigger } from '@/features/components/form-triggers';

export const SignupForm = ({ api, lng, ...translations }: SignupContent) => {
  const t = useMemo(() => createTranslator(translations), [translations]);

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

  const form = useForm<Signout>({
    defaultValues: {
      email: '',
      'first-name': '',
      'last-name': '',
      password: '',
      username: '',
    },
    resolver: zodResolver(SignoutSchema),
  });

  const onSubmit = async (values: Signout) => {
    // Sending user request

    const res = await apiFetch(` ${api}${redirectUrl}`, {
      body: values,
      method: 'POST',
    });

    if (res.ok) {
      router.push(redirectParam || '/profile');
    } else {
      // toast.error(message);
    }
  };

  const renderField = ({ name, type }: (typeof SignoutFields)[0]) => {
    const errorKey = form.formState.errors[name]?.message;

    return (
      <Form.Field
        control={form.control}
        disabled={form.formState.isSubmitting}
        error={errorKey ? t(`form.${errorKey}` as never) : undefined}
        key={name}
        label={t(`form.fields.${name}.label`)}
        name={name}
        placeholder={t(`form.fields.${name}.placeholder`)}
        type={type}
      />
    );
  };

  return (
    <Form className='w-full max-w-md' form={form} submit={onSubmit}>
      <Heading as='h3' content={translations.title} />
      <Summary content={translations.summary} />

      {SignoutFields.map(renderField)}

      <FormTrigger
        label={translations.label}
        loading={form.formState.isSubmitting}
        route={`/${lng}/signin${redirectUrl}`}
        submitLabel={translations.title}
      />
    </Form>
  );
};
