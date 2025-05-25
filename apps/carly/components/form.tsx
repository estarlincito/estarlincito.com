import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@repo/ui/components/button';
import { Form } from '@repo/ui/components/form';
import { Flex } from '@repo/ui/layouts/flex';
import { cn } from '@repo/ui/lib/utils';
import { Send } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  message: z.string().min(2, {
    message: 'Message must be at least 2 characters.',
  }),
});

export type FormInput = z.infer<typeof formSchema>;

interface CarlyFormProps {
  submit: (values: FormInput) => Promise<void>;
}

export const CarlyForm = ({ submit }: CarlyFormProps) => {
  const form = useForm<FormInput>({
    defaultValues: {
      message: '',
    },
    // Please write your message
    // Please provide a valid message
    resolver: zodResolver(formSchema),
  });

  const input = form.watch().message;
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

  // form.reset()

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
        // disabled
        noLabel
        unstyled
        className='resize-none outline-0'
        control={form.control}
        name='message'
        placeholder='Message Carly'
        ref={smooth}
        type='Textarea'
      />

      <Flex className='justify-end'>
        <Button
          disabled={input.length === 0}
          size='icon'
          type='submit'
          variant='ghost'
        >
          <Send size={48} />
        </Button>
      </Flex>
    </Form>
  );
};
