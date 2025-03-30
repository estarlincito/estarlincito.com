import { Box } from '@radix-ui/themes';
import { imwriting } from '@repo/constants';
import React from 'react';

import Container from '@/components/layout/container';
import Header from '@/components/layout/header';

import Latest from './components/latest';
import Topics from './components/topics';

export const { metadata } = imwriting.home;

const HomePage = () => {
  return (
    <Container size='4'>
      <Box p={{ initial: '5', md: '0' }}>
        <Header
          title={`Hey there! 👋 Welcome to ${imwriting.home.title}`}
          description={imwriting.home.description}
          mt='5'
        />
      </Box>
      <Latest />
      <Topics />
    </Container>
  );
};

export default HomePage;
