import { getPathname } from '@repo/lib';
import { Breadcrumb, Image, type Links, Summary, Title } from '@repo/ui';
import { type Articles } from 'contentlayer/generated';
import { headers } from 'next/headers';

import Article from './article';
import Author from './author';
import Check from './check';
import Interesting from './interesting';
import Share from './share';

const ArticleContent = async (props: Articles) => {
  const pathname = await getPathname(headers);
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

  const links: Links = [
    { href: meta.pathnames.category, title: category },
    { href: meta.pathnames.subcategory, title: subcategory },
  ];

  return (
    <>
      <Breadcrumb links={links} pathname={pathname} />
      <Title>{title}</Title>
      <Check check={check} readingTime={readingTime} />
      <Image alt={coverAlt} src={cover} />
      <Summary blockquote content={description} />
      <Author authors={authors} avatar={avatar} modifiedTime={modifiedTime} />
      <Article doc={body.code} />
      <Share
        category={category}
        description={description}
        url={meta.article.openGraph.url}
      />
      <Interesting pathname={meta.pathnames.article} />
    </>
  );
};

export default ArticleContent;
