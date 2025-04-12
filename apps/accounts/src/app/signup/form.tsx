'use client';
import { accounts } from '@repo/constants';
import { useIsClient } from '@repo/hooks';
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

export interface InputSignup {
  'first-name': string;
  'last-name': string;
  username: string;
  email: string;
  password: string;
}

const { signup } = accounts;

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<InputSignup>();
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
        <Title content={signup.title} mb='4' />
        <Summary content={signup.description} />
        <Separator mt='1' size='4' />
      </Box>

      <Form.Field
        required
        errors={errors['first-name']}
        name='first-name'
        register={register}
      />
      <Form.Field
        required
        errors={errors['last-name']}
        name='last-name'
        register={register}
      />
      <Form.Field
        required
        errors={errors['username']}
        name='username'
        register={register}
      />
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
        <Link href={accounts.signin.path + redirect}>
          <Button
            content={accounts.signin.title}
            type='button'
            variant='soft'
          />
        </Link>
        <Button content={signup.title} type='submit' />
      </Flex>
    </Form>
  );
};

export default SignupForm;
