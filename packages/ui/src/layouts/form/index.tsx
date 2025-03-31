import '../../styles/globals.css';

import * as RadixForm from '@radix-ui/react-form';
import { Flex } from '@radix-ui/themes';
import stylez from '@stylezjs/stylez';
import React from 'react';

import Button from './button.js';
import Field from './field/index.js';
import Link from './link.js';

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
  children: React.ReactNode;

  action?:
    | string
    | ((formData: FormData, state?: FormState) => void | Promise<void>)
    | undefined;
  onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
  height?: string;
}
interface _Form {
  ({ children, action, onSubmit, height }: FormProps): React.JSX.Element;
  Button: typeof Button;
  Field: typeof Field;
  Link: typeof Link;
}

export const Form: _Form = ({
  children,
  action,
  onSubmit,
  height,
}: FormProps) => {
  return (
    <Flex
      height={height}
      asChild
      direction='column'
      p='5'
      gapY='1'
      justify='center'
      width={{ initial: '400px', md: '600px' }}
      {...stylez.className(styles)}
    >
      <RadixForm.Root action={action} onSubmit={onSubmit}>
        {children}
      </RadixForm.Root>
    </Flex>
  );
};

Form.Button = Button;
Form.Field = Field;
Form.Link = Link;
