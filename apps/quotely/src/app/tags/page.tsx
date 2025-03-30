import { quotely } from '@repo/constants';
import { Container, Header, SearchParamsProps } from '@repo/ui';

import TagList from '@/components/tags/list';
import { getTags } from '@/lib/quotes';

export const { metadata } = quotely.quotes;

const TagsPage = async ({ searchParams }: SearchParamsProps) => {
  const searchParamsData = await searchParams;
  const tagsData = await getTags(searchParamsData);

  return (
    <Container size='4'>
      <Header
        title={quotely.tags.title}
        summary={quotely.tags.description}
        slug={[{ route: quotely.tags.path, title: quotely.tags.title }]}
      />
      <TagList tagsData={tagsData} {...searchParamsData} />
    </Container>
  );
};

export default TagsPage;
