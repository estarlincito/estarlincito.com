import { z } from 'zod/v4';

export const FormSchema = z.object({
  message: z
    .string()
    .nonempty({ message: 'validation.message.required' })
    .min(2, {
      message: 'validation.message.min',
    }),
});

export type FormInput = z.infer<typeof FormSchema>;
