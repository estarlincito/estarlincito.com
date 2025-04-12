import { apiFetch, num, type ResmsgTypes } from '@estarlincito/utils';
import type { SubmitHandler, UseFormSetError } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { contactSchema } from './contact-schema.js';
import type { InputContact } from './form.js';

const onSubmit =
  (setError: UseFormSetError<InputContact>): SubmitHandler<InputContact> =>
  async (data) => {
    // Validating user data
    const safeData = contactSchema.safeParse(data);
    if (!safeData.success) {
      safeData.error.issues.forEach(({ code, message, path }) => {
        setError(path[num('0')] as keyof InputContact, {
          message,
          type: code,
        });
      });
    }

    // Sending user request
    const res = await apiFetch({
      body: JSON.stringify(data),
      method: 'POST',
      url: 'https://estarlincito.com/api/mail',
    });

    const { message, success } = (await res.json()) as ResmsgTypes['Resmsg'];
    if (success) {
      toast.success(message);
    }
    toast.error(message);
  };

export default onSubmit;
