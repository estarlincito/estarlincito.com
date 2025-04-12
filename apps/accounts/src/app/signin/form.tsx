'use client';
import {
  Box,
  Button,
  Flex,
  Form,
  Link,
  Separator,
  Summary,
  Title,
} from '@repo/ui';
import { useForm } from 'react-hook-form';

import onSubmit from './submit';

export interface InputSignin {
  email: string;
  password: string;
}
console.log('Forgot password?');
import { accounts } from '@repo/constants';
import { signup } from '@repo/constants/dist/accounts';
import { useIsClient } from '@repo/hooks';

const { signin } = accounts;

const SigninForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<InputSignin>();
  const isClient = useIsClient();

  let redirect = '';

  if (isClient) {
    const searchParams = new URLSearchParams(window.location.search);
    const url = searchParams.get('redirect');
    if (url) redirect = `?redirect=${url}`;
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit(setError))}>
      <Box mb='5'>
        <Title content={signin.title} mb='4' />
        <Summary content={signin.description} />
        <Separator mt='1' size='4' />
      </Box>

      <Form.Field
        required
        errors={errors['email']}
        name='email'
        register={register}
      />
      <Form.Field
        required
        errors={errors['password']}
        name='password'
        register={register}
      />

      <Flex gapX='3' justify='end'>
        <Link href={accounts.signup.path + redirect}>
          <Button content={signup.title} type='button' variant='soft' />
        </Link>
        <Button content={signin.title} type='submit' />
      </Flex>
    </Form>
  );
};

export default SigninForm;
