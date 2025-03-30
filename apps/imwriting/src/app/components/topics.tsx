import { Badge, Heading, Link, Section } from '@radix-ui/themes';
import { imwriting } from '@repo/constants';
import { allArticles } from 'contentlayer/generated';
import React from 'react';

const Topics = () => {
  const { alllinks } = imwriting.topics(allArticles);
  return (
    <Section p={{ initial: '5', md: '0' }}>
      <Heading align='center' my='2'>
        Topics
      </Heading>

      {alllinks.map(({ route, label }, id) => (
        <Badge color='gray' key={id} mr='1'>
          <Link underline='none' href={route}>
            {label}
          </Link>
        </Badge>
      ))}
    </Section>
  );
};

export default Topics;
