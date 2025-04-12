'use client';

import { useForm } from 'react-hook-form';

import {
  Box,
  Breadcrumb,
  Button,
  Flex,
  Form,
  Separator,
  Summary,
  Title,
} from '@/components/ui/index.js';

import onSubmit from './submit.js';

export interface InputContact {
  'first-name': string;
  'last-name': string;
  company: string;
  'phone-number': string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputContact>();

  return (
    <Form onSubmit={handleSubmit(onSubmit(setError))}>
      <Box mb='5'>
        <Breadcrumb
          links={[{ href: '/contact', title: 'Contact ' }]}
          pathname=''
        />
        <Title content='Get in touch' my='2' />
        <Summary content='Seeks collaboration on building something impactful and sustainable!' />
        <Separator mt='1' size='4' />
      </Box>

      <Flex
        direction={{ initial: 'column', md: 'row' }}
        gapX='2'
        justify='between'
      >
        <Box minWidth='270px'>
          <Form.Field
            required
            errors={errors['first-name']}
            name='first-name'
            register={register}
          />
        </Box>
        <Box minWidth='270px'>
          <Form.Field
            required
            errors={errors['last-name']}
            name='last-name'
            register={register}
          />
        </Box>
      </Flex>
      <Form.Field
        errors={errors['company']}
        name='company'
        register={register}
      />
      <Form.Field
        errors={errors['phone-number']}
        name='phone-number'
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
        textarea
        errors={errors['message']}
        name='message'
        register={register}
      />
      <Button content='Send message' />
    </Form>
  );
};

export default ContactForm;
