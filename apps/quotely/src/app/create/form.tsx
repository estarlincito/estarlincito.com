'use client';
import { PlusIcon } from '@radix-ui/react-icons';
import { Box, Flex, IconButton, Tooltip } from '@radix-ui/themes';
import { quotely } from '@repo/constants';
import { Form, Summary, Title } from '@repo/ui';
import React from 'react';
import { useForm } from 'react-hook-form';

import type { CreateType } from '@/schemas/quotes/create';

import onSubmit from './submit';
const { create } = quotely;

const CreateForm = () => {
  const { register, handleSubmit } = useForm<CreateType>();

  return (
    <Form
      onSubmit={(e) => {
        void handleSubmit(onSubmit)(e);
      }}
    >
      <Box mb='5'>
        <Title contents={create.title} mb='4' />
        <Summary contents={create.description} />
      </Box>

      <Form.Field name='quote' textarea required register={register} />
      <Form.Field name='authors' required register={register} />
      <Form.Field name='reference' required register={register} />
      <Form.Field name='sourceName' required register={register} />
      <Form.Field name='sourceType' required register={register} />
      <Form.Field name='sourceUrl' required register={register} />
      <Form.Field name='tags' required register={register} />

      <Flex mt='4' mr='2' justify='center'>
        <Tooltip content='Add to library'>
          <IconButton radius='full'>
            <PlusIcon />
          </IconButton>
        </Tooltip>
      </Flex>
    </Form>
  );
};

export default CreateForm;
