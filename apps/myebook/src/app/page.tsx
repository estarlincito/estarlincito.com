import { Box } from '@radix-ui/themes';
import { imwriting } from '@repo/constants';
import { Container, Header } from '@repo/ui';
import React from 'react';

const { home } = imwriting;
export const { metadata } = home;

const HomePage: React.FC = () => {
  return (
    <Container size='4'>
      <Box p={{ initial: '5', md: '0' }}>
        <Header
          title='Hey there! 👋 Welcome to Imwriting'
          summary={home.description}
          slug={[{ route: '', title: '' }]}
        />
      </Box>
    </Container>
  );
};

export default HomePage;
