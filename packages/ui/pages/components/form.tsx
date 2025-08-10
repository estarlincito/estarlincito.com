'use client';
import { apiFetch, type BodyInit, throwAppError } from '@estarlincito/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Translations } from '@repo/content/estarlincito/locales';
import { host } from '@repo/content/estarlincito/settings';
import { createTranslator } from '@repo/content/utils/translator';
import { type Contact, ContactSchema } from '@repo/lib/schemas/contact';
import { Box } from '@repo/ui/components/box';
import { Button } from '@repo/ui/components/button';
import {
  Form as UIForm,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@repo/ui/components/form';
import { Input } from '@repo/ui/components/input';
import { Textarea } from '@repo/ui/components/textarea';
// import { useRecaptcha } from '@repo/ui/hooks/useRecaptcha';
import { Flex } from '@repo/ui/layouts/flex';
import { Grid } from '@repo/ui/layouts/grid';
import { cn } from '@repo/ui/lib/utils';
import { Loader2Icon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export const Form = (translations: Translations['contact']['form']) => {
  const search = useSearchParams();
  const t = useMemo(() => createTranslator(translations), [translations]);
  // const token = useRecaptcha('contact');

  const form = useForm<Contact>({
    defaultValues: {
      company: '',
      email: '',
      'first-name': '',
      'last-name': '',
      message: '',
      'phone-number': '',
      subject: '',
    },

    resolver: zodResolver(ContactSchema),
  });

  useEffect(() => {
    if (search.size > 0) {
      form.setValue('company', search.get('company') ?? '');
      form.setValue('email', search.get('email') ?? '');
      form.setValue('subject', search.get('subject') ?? '');
      form.setValue('first-name', search.get('first-name') ?? '');
      form.setValue('last-name', search.get('last-name') ?? '');
      form.setValue('phone-number', search.get('phone-number') ?? '');
      form.setValue('message', search.get('message') ?? '');
    }
  }, [form, search]);

  const {
    control,
    reset,
    formState: { isSubmitting },
  } = form;

  const fields: { name: keyof Contact; variant?: 'Textarea' }[] = [
    { name: 'first-name' },
    { name: 'last-name' },
    { name: 'subject' },
    { name: 'company' },
    { name: 'phone-number' },
    { name: 'email' },
    { name: 'message', variant: 'Textarea' },
  ];

  const renderField = ({ name, variant }: (typeof fields)[0]) => {
    const errorKey = form.formState.errors[name]?.message;

    const Field = variant === 'Textarea' ? Textarea : Input;

    return (
      <FormField
        control={control}
        key={name}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t(`fields.${name}.label`)}</FormLabel>
            <FormControl>
              <Field
                className={variant === 'Textarea' ? 'resize-none' : undefined}
                placeholder={t(`fields.${name}.placeholder`)}
                {...field}
              />
            </FormControl>
            {/* <FormDescription /> */}

            {errorKey && <FormMessage>{t(errorKey as never)}</FormMessage>}
          </FormItem>
        )}
      />
    );
  };

  const onSubmit = useCallback(
    async (values: Contact) => {
      try {
        // if (!token) return;

        const res = await apiFetch(`${host}/api/mail`, {
          // body: { ...values, token },
          body: values,
          method: 'POST',
        });

        if (!res.ok) throwAppError('Request failed');

        const { message } = (await res.json()) as BodyInit;
        toast.success(message);

        reset();
      } catch {
        toast.error('Something went wrong. Try again.');
      }
    },
    [
      reset,
      // token
    ],
  );

  return (
    <UIForm {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Flex className={cn('gap-5 flex-col mt-5', 'sm:flex-row')}>
          {fields.slice(0, 2).map((f) => (
            <Box className='sm:w-1/2' key={f.name}>
              {renderField(f)}
            </Box>
          ))}
        </Flex>

        <Grid className='w-full gap-5 mt-4'>
          {fields.slice(2).map(renderField)}
        </Grid>

        <Grid className='w-full gap-2 mt-5'>
          <Button disabled={isSubmitting} type='submit'>
            {isSubmitting ? (
              <>
                <Loader2Icon className='animate-spin' />
                {t('actions.loading')}
              </>
            ) : (
              <>{t('actions.submit')}</>
            )}
          </Button>
        </Grid>
      </form>
    </UIForm>
  );
};
