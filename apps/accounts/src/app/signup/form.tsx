'use client';
import { Box, Flex } from '@radix-ui/themes';
import { accounts } from '@repo/constants';
import { Form, Summary, Title } from '@repo/ui';
import { useForm } from 'react-hook-form';

import onSubmit from './submit';

export interface InputSignup {
  'first-name': string;
  'last-name': string;
  username: string;
  email: string;
  password: string;
}
const { signup } = accounts;
const SignupForm = () => {
  const { register, handleSubmit } = useForm<InputSignup>();

  return (
    <Form
      onSubmit={(e) => {
        void handleSubmit(onSubmit)(e);
      }}
    >
      <Box mb='5'>
        <Title contents={signup.title} mb='4' />
        <Summary contents={signup.description} />
      </Box>

      <Form.Field name='first-name' required register={register} />
      <Form.Field name='last-name' required register={register} />
      <Form.Field name='username' required register={register} />
      <Form.Field name='email' required register={register} />
      <Form.Field name='password' required register={register} />
      <Form.Button label={signup.title} />

      <Flex mt='4' mr='2' justify='end'>
        <Form.Link label='Login' route='/signin' />
      </Flex>
    </Form>
  );
};

export default SignupForm;
