import { quotely } from '@repo/constants';
import { getPathname } from '@repo/lib';
import { Header, type Links, type SearchParamsProps, Wrapper } from '@repo/ui';
import { headers } from 'next/headers';

import TagList from '@/components/tags/list';
import { getTags } from '@/lib/quotes';

export const { metadata } = quotely.quotes;

const TagsPage = async ({ searchParams }: SearchParamsProps) => {
  const searchParamsData = await searchParams;
  const tagsData = await getTags(searchParamsData);
  const pathname = await getPathname(headers);
  const links: Links = [{ href: quotely.tags.path, title: quotely.tags.title }];

  return (
    <Wrapper>
      <Header
        links={links}
        pathname={pathname}
        summary={quotely.tags.description}
        title={quotely.tags.title}
      />
      <TagList tagsData={tagsData} {...searchParamsData} />
    </Wrapper>
  );
};

export default TagsPage;
