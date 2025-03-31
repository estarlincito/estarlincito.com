import { Box } from '@radix-ui/themes';
import { imwriting } from '@repo/constants';
import { Container, Header } from '@repo/ui';
import React from 'react';

import Latest from './components/latest';
import Topics from './components/topics';

export const { metadata } = imwriting.home;

const HomePage = () => {
  return (
    <Container size='4'>
      <Box p={{ initial: '5', md: '0' }}>
        <Header
          title={`Hey there! 👋 Welcome to ${imwriting.home.title}`}
          summary={imwriting.home.description}
        />
      </Box>
      <Latest />
      <Topics />
    </Container>
  );
};

export default HomePage;
