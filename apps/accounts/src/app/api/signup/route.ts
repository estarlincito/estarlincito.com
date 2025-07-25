/* eslint-disable no-console */
import { ApiResponse } from '@estarlincito/utils';
import type { NextRequest } from 'next/server';
import { z } from 'zod/v4';

const signoutSchema = z.object({
  email: z
    .email({ message: 'validation.email.format' })
    .nonempty({ message: 'validation.email.required' })
    .min(5, { message: 'validation.email.min' })
    .max(50, { message: 'validation.email.max' }),

  'first-name': z
    .string({ message: 'validation.first-name.required' })
    .nonempty({ message: 'validation.first-name.required' })
    .min(1, {
      message: 'validation.first-name.min',
    })
    .max(50, { message: 'validation.first-name.max' }),

  'last-name': z
    .string({ message: 'validation.last-name.required' })
    .nonempty({ message: 'validation.last-name.required' })
    .min(1, {
      message: 'validation.last-name.min',
    })
    .max(50, { message: 'validation.last-name.max' }),

  password: z
    .string({ message: 'Please enter your password' })
    .nonempty({ message: 'Please enter your password' })
    .min(8, { message: 'Password must be at least 8 characters long' })
    .max(50, { message: 'Password must not exceed 50 characters' })
    .refine((val) => /[a-z]/.test(val), {
      message: 'Password must contain at least one lowercase letter',
    })
    .refine((val) => /[A-Z]/.test(val), {
      message: 'Password must contain at least one uppercase letter',
    })
    .refine((val) => /\d/.test(val), {
      message: 'Password must contain at least one number',
    })
    .refine((val) => /[\W_]/.test(val), {
      message: 'Password must contain at least one special character',
    }),
  username: z
    .string({ message: 'Please enter your username' })
    .nonempty({ message: 'Please enter your username' })
    .min(8, { message: 'Username must be at least 8 characters long' })
    .max(20, { message: 'Username must not exceed 20 characters' })
    .regex(/^[a-z]+$/, {
      message: 'Username must only contain lowercase letters (a-z)',
    }),
});

export const POST = async (req: NextRequest): Promise<Response> => {
  // validating data

  const body = await req.formData();

  const data = {
    email: body.get('email'),
    'first-name': body.get('first-name'),
    'last-name': body.get('last-name'),
    name: body.get('name'),
    password: body.get('password'),
    username: body.get('username'),
  };

  const safeData = signoutSchema.safeParse(data);
  if (!safeData.success) {
    console.log(safeData.error.format());
  }
  return ApiResponse.json({
    code: 200,
    message: 'Unavailable at the moment',
    success: true,
  });

  // const hashed_password = await bcrypt.hash(password as string, 10);

  // try {
  //   const user = e.insert(e.User, {
  //     name,
  //     email,
  //     password: hashed_password,
  //   });

  //   await user.run(client);
  // } catch (error) {
  //   return ApiResponse.json({success:false, message:JSON.stringify(error), code:404});
  // }

  // await createSession('estarlincito');

  // return ApiResponse.json({success:true, message:'User has been successfully created', code:200});
};
