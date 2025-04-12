import { z } from 'zod';

export const typeScheme = z.union([
  z.literal('number'),
  z.literal('email'),
  z.literal('password'),
  z.literal('text'),
  z.literal('tel'),
  z.literal('hidden'),
  z.literal('search'),
  z.literal('time'),
  z.literal('url'),
  z.literal('date'),
  z.literal('datetime-local'),
  z.literal('month'),
  z.literal('week'),
  z.undefined(),
]);
export const nameSchema = z.union([
  z.literal('first-name'),
  z.literal('last-name'),
  z.literal('phone-number'),
  z.literal('company'),
  z.literal('email'),
  z.literal('password'),
  z.literal('message'),
  z.literal('username'),
]);

export const fieldSchema = z.object({
  maxLength: z.number(),
  minLength: z.number(),
  placeholder: z.string(),
  title: z.string(),
  type: typeScheme,
});

export const props = new Map<
  z.infer<typeof nameSchema>,
  z.infer<typeof fieldSchema>
>();

props.set('company', {
  maxLength: 30,
  minLength: 2,
  placeholder: "Estarlincito Support's",
  title: '',
  type: 'text',
});

props.set('email', {
  maxLength: 30,
  minLength: 5,
  placeholder: 'name@domain.com',
  title: '',
  type: 'email',
});

props.set('first-name', {
  maxLength: 30,
  minLength: 1,
  placeholder: 'Estarlin',
  title: '',
  type: 'text',
});

props.set('last-name', {
  maxLength: 30,
  minLength: 1,
  placeholder: 'R',
  title: '',
  type: 'text',
});

props.set('message', {
  maxLength: 1000,
  minLength: 1,
  placeholder: 'Enter your message here…',
  title: '',
  type: 'text',
});

props.set('password', {
  maxLength: 30,
  minLength: 8,
  placeholder: '4ppl3-1Ph0ne',
  title: '',
  type: 'password',
});

props.set('phone-number', {
  maxLength: 12,
  minLength: 10,
  placeholder: '123-456-7890',
  title: '',
  type: 'tel',
});

props.set('username', {
  maxLength: 20,
  minLength: 5,
  placeholder: 'estarlincito',
  title: '',
  type: 'text',
});
