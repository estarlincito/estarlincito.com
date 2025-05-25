import { url } from '@app/carly/settings';
import { Button } from '@repo/ui/components/button';
import { Heading } from '@repo/ui/components/heading';
import { Textarea } from '@repo/ui/components/textarea';
import { Section } from '@repo/ui/layouts/section';
import { redirect } from 'next/navigation';

export const CarlyAction = () => {
  const onSubmit = async (formData: FormData) => {
    'use server';

    const rawFormData = {
      message: (formData.get('message') as string) ?? '',
    };

    redirect(`${url}/?message=${rawFormData.message}`);
  };

  return (
    <Section>
      <Heading as='h3' content='Chat with Carly!' />
      <form action={onSubmit}>
        <Textarea
          required
          className='resize-none'
          name='message'
          placeholder='Enter your message'
        />
        <Button className='w-full my-5' type='submit'>
          Send
        </Button>
      </form>
    </Section>
  );
};
