import type { Translations } from '@repo/content/estarlincito/locales';
import { Skeleton } from '@repo/ui/components/skeleton';
import { Form } from '@repo/ui/pages/components/form';
import { Suspense } from 'react';

export const ContactForm = (translations: Translations['contact']['form']) => (
  <Suspense
    fallback={
      <div className='w-[400px]'>
        {Array.from({ length: 6 }, (_, key) => (
          <Skeleton className='h-[50px] my-5 rounded-full' key={key} />
        ))}
      </div>
    }
  >
    <Form {...translations} />
  </Suspense>
);
