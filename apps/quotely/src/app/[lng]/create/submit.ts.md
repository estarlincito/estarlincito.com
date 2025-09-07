import { fecchi } from 'fecchi';
import type { SubmitHandler, UseFormSetError } from 'react-hook-form';
import { toast } from 'sonner';

import type { CreateFields } from './form';

export const onSubmit =
// eslint-disable-next-line @typescript-eslint/no-unused-vars
(\_setError: UseFormSetError<CreateFields>): SubmitHandler<CreateFields> =>
async (data) => {
// const quote = createSchema.parse(data);
// const session = '';
let response;
try {
const res = await fecchi(
'https://quotely.estarlincito.workers.dev/create',
{
body: data as unknown as Record<string, string>,
method: 'POST',
},
);

        response = await res.json();
      } catch {
        toast.error('Issue adding quote');
      }

      return response;
    };
