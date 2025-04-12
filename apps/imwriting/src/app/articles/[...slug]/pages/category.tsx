import { num } from '@estarlincito/utils';
import { getPathname } from '@repo/lib';
import { Header, type Links, type SearchParams } from '@repo/ui';
import { type Articles } from 'contentlayer/generated';
import { headers } from 'next/headers';

import ArticlesList from '@/components/articles/list';

interface Props extends SearchParams {
  articles: [Articles, ...Articles[]];
}

const Category = async ({ articles, limit, offset }: Props) => {
  const pathname = await getPathname(headers);
  const {
    meta: {
      category: { title, description },
      pathnames,
    },
  } = articles[num('0')];

  const links: Links = [{ href: pathnames.category, title }];

  return (
    <>
      <Header
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
        route={articles[num('0')].meta.pathnames.category}
      />
    </>
  );
};

export default Category;
