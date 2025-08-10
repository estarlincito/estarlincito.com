'use client';
import { apiFetch } from '@estarlincito/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import type { SigninContent } from '@repo/content/accounts/signin';
import { createTranslator } from '@repo/content/utils/translator';
import { SigninFields } from '@repo/lib/fields/signin';
import { type Signin, SigninSchema } from '@repo/lib/schemas/signin';
import { Box } from '@repo/ui/components/box';
import { Button } from '@repo/ui/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@repo/ui/components/form';
import { Input } from '@repo/ui/components/input';
import { Link } from '@repo/ui/components/link';
import { Flex } from '@repo/ui/layouts/flex';
import { Loader2Icon } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

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
      <FormField
        control={form.control}
        key={name}
        name={name}
        render={({ field }) => (
          <FormItem>
            {type === 'password' ? (
              <Flex>
                <FormLabel>{t(`form.fields.${name}.label`)}</FormLabel>
                <Link
                  className='ml-auto inline-block text-sm underline-offset-4 hover:underline'
                  route='#'
                >
                  {t('form.fields.password.forgot_password')}
                </Link>
              </Flex>
            ) : (
              <FormLabel>{t(`form.fields.${name}.label`)}</FormLabel>
            )}

            <FormControl>
              <Input
                disabled={form.formState.isSubmitting}
                placeholder={t(`form.fields.${name}.placeholder`)}
                type={type}
                {...field}
              />
            </FormControl>

            {errorKey && (
              <FormMessage>{t(`form.${errorKey}` as never)}</FormMessage>
            )}
          </FormItem>
        )}
      />
    );
  };

  return (
    <Flex className='flex-col gap-6 w-full max-w-sm'>
      <Card>
        <CardHeader>
          <CardTitle>{translations.title}</CardTitle>
          <CardDescription>{translations.summary}</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Flex className='flex-col gap-6'>
                {SigninFields.map(renderField)}
                <Button
                  className='w-full'
                  disabled={form.formState.isSubmitting}
                  type='submit'
                >
                  {form.formState.isSubmitting ? (
                    <>
                      <Loader2Icon className='animate-spin' />{' '}
                      {t('form.labels.please_wait')}
                    </>
                  ) : (
                    translations.title
                  )}
                </Button>
              </Flex>

              <Box className='mt-4 text-center text-sm'>
                {t('form.no_account')}{' '}
                <Link
                  className='underline underline-offset-4'
                  route={`/${lng}/signup${redirectUrl}`}
                >
                  {translations.label}
                </Link>
              </Box>
            </form>
          </Form>
        </CardContent>
      </Card>
    </Flex>
  );
};
