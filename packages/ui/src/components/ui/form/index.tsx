import '@/styles/globals.css';

import * as RadixForm from '@radix-ui/react-form';
import stylez from '@stylezjs/stylez';
import type { FormEventHandler, JSX, ReactNode } from 'react';

import { Flex } from '@/components/ui/radix.js';

import Field from './field/index.jsx';

const styles = stylez.create({
  backgroundColor: 'var(--gray-1)',
  border: '1px solid var(--gray-5)',
  borderRadius: '0.625rem',
});

type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

interface FormProps {
  children: ReactNode;

  action?:
    | string
    | ((formData: FormData, state?: FormState) => void | Promise<void>)
    | undefined;
  onSubmit?: FormEventHandler<HTMLFormElement> | undefined;
  height?: string;
}
interface _Form {
  ({ children, action, onSubmit, height }: FormProps): JSX.Element;
  Field: typeof Field;
}

export const Form: _Form = ({
  children,
  action,
  onSubmit,
  height,
}: FormProps) => (
  <Flex
    asChild
    direction='column'
    gapY='1'
    height={height}
    justify='center'
    minWidth={{ initial: '400px', md: '500px' }}
    p='5'
    {...stylez.className(styles)}
  >
    <RadixForm.Root action={action} onSubmit={onSubmit}>
      {children}
    </RadixForm.Root>
  </Flex>
);

Form.Field = Field;
