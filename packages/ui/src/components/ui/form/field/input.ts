import { num } from '@estarlincito/utils';
import type { z } from 'zod';

import { type fieldSchema, type nameSchema, props } from './props.js';

export const getInputProps = (
  name: z.infer<typeof nameSchema>,
): z.infer<typeof fieldSchema> => {
  const indexOne: string = name[num('0')] as string;
  const title = name
    .replace(indexOne, indexOne.toLocaleUpperCase())
    .replace('-', ' ');

  const prop = props.get(name);

  if (!prop) {
    return {
      maxLength: 9999999999999,
      minLength: 0,
      placeholder: `Insert ${name.toLocaleLowerCase()}`,
      title,
      type: 'text' as const,
    };
  }
  return { ...prop, title };
};
