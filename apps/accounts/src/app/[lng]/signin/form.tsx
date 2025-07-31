'use client';
import { apiFetch } from '@estarlincito/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import type { SigninContent } from '@repo/content/accounts/signin';
import { createTranslator } from '@repo/content/utils/translator';
import { SigninFields } from '@repo/lib/fields/signin';
import { type Signin, SigninSchema } from '@repo/lib/schemas/signin';
import { Form } from '@repo/ui/components/form';
import { Heading } from '@repo/ui/components/heading';
import { Summary } from '@repo/ui/components/summary';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { FormTrigger } from '@/features/components/form-triggers';

export const SigninForm = ({ api, lng, ...translations }: SigninContent) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useMemo(() => createTranslator(translations), [translations]);

  // Get redirect URL from query parameters
  const redirectParam = useMemo(
    () => searchParams?.get('redirect') ?? '',
    [searchParams],
  );

  const redirectUrl = useMemo(
    () => (redirectParam ? `?redirect=${redirectParam}` : ''),
    [redirectParam],
  );

  const form = useForm<Signin>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(SigninSchema),
  });

  const onSubmit = async (values: Signin) => {
    const res = await apiFetch(`${api}${redirectUrl}`, {
      body: values,
      method: 'POST',
    });

    if (res.ok) {
      router.push(redirectParam || `/${lng}/profile`);
    } else {
      // toast.error(await res.json());
    }
  };

  const renderField = ({ name, type }: (typeof SigninFields)[0]) => {
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

      {SigninFields.map(renderField)}

      <FormTrigger
        label={translations.label}
        loading={form.formState.isSubmitting}
        route={`/${lng}/signup${redirectUrl}`}
        submitLabel={translations.title}
      />
    </Form>
  );
};
