'use client';
import { Box, Flex } from '@radix-ui/themes';
import { Form, Summary, Title } from '@repo/ui';
import React from 'react';
import { useForm } from 'react-hook-form';

import onSubmit from './submit';
export interface InputSignin {
  email: string;
  password: string;
}

import { accounts } from '@repo/constants';
const { signin } = accounts;

const SigninForm = () => {
  const { register, handleSubmit } = useForm<InputSignin>();

  return (
    <Form
      onSubmit={(e) => {
        void handleSubmit(onSubmit)(e);
      }}
    >
      <Box mb='5'>
        <Title contents={signin.title} mb='4' />
        <Summary contents={signin.description} />
      </Box>

      <Form.Field name='email' required register={register} />
      <Form.Field name='password' required register={register} />
      <Form.Button label={signin.title} />

      <Flex mt='4' mr='2' justify='end'>
        <Form.Link label='Signup' route='signup' />
      </Flex>
    </Form>
  );
};

export default SigninForm;
