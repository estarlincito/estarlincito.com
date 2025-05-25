import { ArticlesList } from '@app/imwriting/components/articles/list';
import { getPathname } from '@repo/lib/pathname';
import type { LinksType, SearchParams } from '@repo/types';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';
import { type Articles } from 'contentlayer/generated';
import { headers } from 'next/headers';

interface Props extends SearchParams {
  articles: [Articles, ...Articles[]];
}

export const SubCategory = async ({ articles, limit, offset }: Props) => {
  const pathname = await getPathname(headers);
  const {
    meta: {
      pathnames,
      subcategory: { title, description },
    },
  } = articles[0];

  const links: LinksType = [{ label: title, route: pathnames.subcategory }];

  // 320px
  return (
    <Container className='p-0'>
      <Header
        className='px-5'
        links={links}
        pathname={pathname}
        summary={description}
        title={title}
      />

      <ArticlesList
        articles={articles}
        count={articles.length}
        limit={limit}
        offset={offset}
        route={articles[0].meta.pathnames.subcategory}
      />
    </Container>
  );
};
