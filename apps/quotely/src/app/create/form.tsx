'use client';
import { PlusIcon } from '@radix-ui/react-icons';
import { quotely } from '@repo/constants';
import { Button, Flex, Form, Header, IconButton, Tooltip } from '@repo/ui';
import { useForm } from 'react-hook-form';

import onSubmit from './submit';
const { create } = quotely;

export interface CreateFields {
  authors: string;
  quote: string;
  reference: string;
  sourceName: string;
  sourceType: string;
  sourceUrl: string;
  tags: string;
  addedAt: string;
}

const CreateForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<CreateFields>();

  return (
    <Form onSubmit={void handleSubmit(onSubmit(setError))}>
      <Header summary={create.description} title={create.title} />
      <Button size={{ initial: '3', xs: '4' }} />
      <Form.Field
        required
        textarea
        errors={errors['quote']}
        name='quote'
        register={register}
      />
      <Form.Field
        required
        errors={errors['authors']}
        name='authors'
        register={register}
      />
      <Form.Field
        required
        errors={errors['reference']}
        name='reference'
        register={register}
      />
      <Form.Field
        required
        errors={errors['sourceName']}
        name='sourceName'
        register={register}
      />
      <Form.Field
        required
        errors={errors['sourceType']}
        name='sourceType'
        register={register}
      />
      <Form.Field
        required
        errors={errors['sourceUrl']}
        name='sourceUrl'
        register={register}
      />
      <Form.Field
        required
        errors={errors['tags']}
        name='tags'
        register={register}
      />

      <Flex justify='center' mr='2' mt='4'>
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
