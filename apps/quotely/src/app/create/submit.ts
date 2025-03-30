import { apiFetch } from '@estarlincito/utils';
import { type SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';

import { type CreateType } from '@/schemas/quotes/create';

const onSubmit: SubmitHandler<CreateType> = async (data) => {
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

export default onSubmit;
