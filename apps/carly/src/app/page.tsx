import { Container } from '@radix-ui/themes';
import { carly } from '@repo/constants';
import React from 'react';

import Carly from '@/components/carly';

export const { metadata } = carly.HOME;

const Page = () => {
  return (
    <Container size='3' p='2'>
      <Carly />
    </Container>
  );
};

export default Page;
