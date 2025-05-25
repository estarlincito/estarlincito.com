import { Article } from '@app/imwriting/components/articles/content/article';
import { Author } from '@app/imwriting/components/articles/content/author';
import { Check } from '@app/imwriting/components/articles/content/check';
import { Interesting } from '@app/imwriting/components/articles/content/interesting';
import { Share } from '@app/imwriting/components/articles/content/share';
import { getPathname } from '@repo/lib/pathname';
import type { LinksType } from '@repo/types';
import { Box } from '@repo/ui/components/box';
import { Breadcrumb } from '@repo/ui/components/breadcrumb';
import { Heading } from '@repo/ui/components/heading';
import { Image } from '@repo/ui/components/image';
import { Summary } from '@repo/ui/components/summary';
import { Container } from '@repo/ui/layouts/container';
import { type Articles } from 'contentlayer/generated';
import { headers } from 'next/headers';

export const ArticleContent = async (props: Articles) => {
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

  const links: LinksType = [
    { label: category, route: meta.pathnames.category },
    { label: subcategory, route: meta.pathnames.subcategory },
  ];

  return (
    <Container className='p-0' size='3'>
      <Breadcrumb links={links} pathname={pathname} />
      <Heading content={title} />

      <Check check={check} readingTime={readingTime} />
      <Box>
        <Image alt={coverAlt} src={cover} />
      </Box>
      <Summary blockquote content={description} />
      <Author authors={authors} avatar={avatar} modifiedTime={modifiedTime} />
      <Article doc={body.code} />
      <Share
        category={category}
        description={description}
        url={meta.article.openGraph.url}
      />
      <Interesting pathname={meta.pathnames.article} />
    </Container>
  );
};
