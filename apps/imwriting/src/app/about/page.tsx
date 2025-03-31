import { Heading, Text } from '@radix-ui/themes';
import { imwriting } from '@repo/constants';
import { Container, Header, Wrapper } from '@repo/ui';
import React from 'react';

import ClientBreadcrumb from '@/components/breadcrumb';
import Topics from '@/components/topics';

export const { metadata } = imwriting.about;

const Mission = Text;
const Bio = Text;

const Page = () => {
  return (
    <Container size='3'>
      <Wrapper align='start'>
        <ClientBreadcrumb
          slug={[{ route: imwriting.about.path, title: imwriting.about.title }]}
        />
        <Header
          title={imwriting.about.title}
          summary={imwriting.about.description}
        />
        <Heading size='4'>
          {imwriting.about.content.introduction.greeting}
        </Heading>
        <Bio>{imwriting.about.content.introduction.bio}</Bio>
        <Mission>{imwriting.about.content.introduction.mission}</Mission>
        <Topics {...imwriting.about.content.topics} />
        <Text>{imwriting.about.content.closingMessage}</Text>
      </Wrapper>
    </Container>
  );
};

export default Page;
