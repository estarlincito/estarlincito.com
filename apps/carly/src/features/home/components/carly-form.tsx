import { zodResolver } from '@hookform/resolvers/zod';
import type { Translations } from '@repo/content/carly/locales';
import { createTranslator } from '@repo/content/utils/translator';
import { type FormInput, FormSchema } from '@repo/lib/schemas/carly';
import { Button } from '@repo/ui/components/button';
import { Form } from '@repo/ui/components/form';
import { Flex } from '@repo/ui/layouts/flex';
import { cn } from '@repo/ui/lib/utils';
import { Loader2Icon, Send } from 'lucide-react';
import { useEffect, useMemo, useRef } from 'react';
import { useForm, type UseFormReturn } from 'react-hook-form';

interface CarlyFormProps {
  translations: Translations['home']['form'];
  submit: (
    values: FormInput,
    reset: UseFormReturn<FormInput>['reset'],
  ) => Promise<void>;
}

export const CarlyForm = ({ submit, translations }: CarlyFormProps) => {
  const t = useMemo(() => createTranslator(translations), [translations]);

  const form = useForm<FormInput>({
    defaultValues: {
      message: '',
    },

    resolver: zodResolver(FormSchema),
  });

  const isLoading = useMemo(
    () => form.formState.isSubmitting,
    [form.formState.isSubmitting],
  );

  const input = form.watch().message;
  const errorKey = form.formState.errors.message?.message;

  const smooth = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (!smooth.current) return;
    if (smooth.current.scrollHeight >= 200) return;
    if (input.length === 0) {
      smooth.current.style.height = `50px`;
    }
    if (smooth.current) {
      smooth.current.style.height = `${smooth.current.scrollHeight}px`;
    }
  }, [input]);

  return (
    <Form
      className={cn(
        'p-5 rounded-[10px]',
        'border-2',
        'border-gray-200 dark:border-gray-600',
      )}
      form={form}
      submit={submit}
    >
      <Form.Field
        unstyled
        className='resize-none outline-0'
        control={form.control}
        disabled={isLoading}
        error={errorKey ? t(errorKey as never) : undefined}
        name='message'
        placeholder={t('fields.message.placeholder')}
        ref={smooth}
        variant='Textarea'
      />

      <Flex className='justify-end'>
        <Button
          disabled={input.length === 0 || isLoading}
          size='icon'
          type='submit'
          variant='ghost'
        >
          {isLoading ? (
            <Loader2Icon className='animate-spin' />
          ) : (
            <Send size={48} />
          )}
        </Button>
      </Flex>
    </Form>
  );
};
