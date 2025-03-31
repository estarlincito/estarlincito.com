import { apiFetch, type Resmsg } from '@estarlincito/utils';
import { type SubmitHandler } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { InputContact } from './form.js';

const onSubmit: SubmitHandler<InputContact> = async (data) => {
  const res = await apiFetch({
    body: JSON.stringify(data),
    method: 'POST',
    url: 'https://estarlincito.com/api/mail',
  });

  const { message, success } = (await res.json()) as Resmsg;
  if (!success) {
    toast.error(message);
    return;
  }
  toast.success(message);
};

export default onSubmit;
