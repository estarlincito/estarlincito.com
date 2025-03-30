import { Heading } from '@radix-ui/themes';
import { type Articles } from 'contentlayer/generated';
import React from 'react';

import Breadcrumb from '@/components/layout/breadcrumb';
import Wrapper from '@/components/layout/wrapper';
import Image from '@/components/ui/image';

import Article from './article';
import Author from './author';
import Check from './check';
import Interesting from './interesting';
import Share from './share';

const ArticleContent = (props: Articles) => {
  const {
    category,
    subcategory,
    title,
    check,
    cover,
    coverAlt,
    readingTime,
    description,
    authors,
    meta,
    body,
    avatar,
    modifiedTime,
  } = props;

  return (
    <Wrapper align='start'>
      <Breadcrumb
        slug={[
          { route: meta.pathnames.category, title: category },
          { route: meta.pathnames.subcategory, title: subcategory },
        ]}
      />

      <Heading size='8'>{title}</Heading>
      <Check check={check} readingTime={readingTime} />
      <Image src={cover} alt={coverAlt} />
      <Author authors={authors} avatar={avatar} modifiedTime={modifiedTime} />
      <Article doc={body.code} />
      <Share
        category={category}
        description={description}
        url={meta.article.openGraph.url}
      />
      <Interesting pathname={meta.pathnames.article} />
    </Wrapper>
  );
};

export default ArticleContent;
