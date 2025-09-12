import { host } from '@repo/content/carly/settings';
import type { HomeContent } from '@repo/content/estarlincito/home';
import { Button } from '@repo/ui/components/button';
import { Heading } from '@repo/ui/components/heading';
import { Textarea } from '@repo/ui/components/textarea';
import { Section } from '@repo/ui/layouts/section';
import { redirect } from 'next/navigation';

export const CarlySection = ({
  cta,
  placeholder,
  title,
}: HomeContent['sections']['carly']) => {
  const onSubmit = async (formData: FormData) => {
    'use server';

    const rawFormData = {
      message: (formData.get('message') as string) ?? '',
    };

    redirect(`${host}/?message=${rawFormData.message}`);
  };

  return (
    <Section>
      <Heading as='h3' content={title} />
      <form action={onSubmit}>
        <Textarea
          required
          className='resize-none'
          name='message'
          placeholder={placeholder}
        />
        <Button className='w-full my-5' type='submit'>
          {cta.label}
        </Button>
      </form>
    </Section>
  );
};
