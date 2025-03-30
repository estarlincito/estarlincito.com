import { myebook } from '@repo/constants';
import { Container } from '@repo/ui';
import React from 'react';

import { PageType } from '@/types/pagination';
const { home } = myebook;

export const { metadata } = home;

interface Props {
  searchParams: Promise<{ page: PageType }>;
}

const Ebooks: React.FC<Props> = async ({ searchParams }) => {
  const { page } = await searchParams;
  return (
    <Container size='4'>
      {/* <Header title={home.title} summary={home.description} /> */}
      <div>{page}</div>
    </Container>
  );
};

export default Ebooks;
