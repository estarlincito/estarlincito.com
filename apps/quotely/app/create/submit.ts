import type { CreateFields } from '@app/quotely/app/create/form';
import { apiFetch } from '@estarlincito/utils';
import type { SubmitHandler, UseFormSetError } from 'react-hook-form';
import { toast } from 'sonner';

export const onSubmit =
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (_setError: UseFormSetError<CreateFields>): SubmitHandler<CreateFields> =>
    async (data) => {
      // const quote = createSchema.parse(data);
      // const session = '';
      let response;
      try {
        const res = await apiFetch({
          body: JSON.stringify(data),
          method: 'POST',
          url: 'https://quotely.estarlincito.workers.dev/create',
        });

        response = await res.json();
      } catch {
        toast.error('Issue adding quote');
      }

      return response;
    };
