'use client';
import { url } from '@app/estarlincito/settings';
import { apiFetch, type ResmsgTypes } from '@estarlincito/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box } from '@repo/ui/components/box';
import { Button } from '@repo/ui/components/button';
import { Form } from '@repo/ui/components/form';
import { Flex } from '@repo/ui/layouts/flex';
import { Grid } from '@repo/ui/layouts/grid';
import { cn } from '@repo/ui/lib/utils';
import { type Contact, contactSchema } from '@repo/ui/schemas/contact';
import { Loader2Icon } from 'lucide-react';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export const ContactForm = () => {
  const form = useForm<Contact>({
    defaultValues: {
      company: '',
      email: '',
      'first-name': '',
      'last-name': '',
      message: '',
      'phone-number': '',
    },

    resolver: zodResolver(contactSchema),
  });

  const submit = async (values: Contact) => {
    const res = await apiFetch({
      body: JSON.stringify(values),
      method: 'POST',
      url: `${url}/api/mail`,
    });

    if (res.ok) {
      form.reset();
      const { message } = (await res.json()) as ResmsgTypes['Resmsg'];
      toast.success(message);
    }
    // toast.error(message);
  };

  const isLoading = useMemo(
    () => form.formState.isSubmitting,
    [form.formState.isSubmitting],
  );

  return (
    <Form form={form} submit={submit}>
      <Flex
        className={cn(
          'gap-3 justify-between flex-col mt-5',
          'sm:flex-row sm:mt-0',
        )}
      >
        <Box className='sm:w-[50%]'>
          <Form.Field control={form.control} name='first-name' />
        </Box>
        <Box className='sm:w-[50%]'>
          <Form.Field control={form.control} name='last-name' />
        </Box>
      </Flex>

      <Form.Field control={form.control} name='company' />
      <Form.Field control={form.control} name='phone-number' />
      <Form.Field control={form.control} name='email' />
      <Form.Field
        className='resize-none'
        control={form.control}
        name='message'
        variant='Textarea'
      />

      <Grid className='w-full gap-2'>
        <Button disabled={isLoading} type='submit'>
          {isLoading ? (
            <>
              <Loader2Icon className='animate-spin' />
              Please wait
            </>
          ) : (
            <>Send message</>
          )}
        </Button>
      </Grid>
    </Form>
  );
};
