import { getTags } from '@repo/content/quotely/lib/quotes';
import { generateMetadata, getTagsContent } from '@repo/content/quotely/tags';
import type { LocalesParams } from '@repo/content/utils/locales';
import type { SearchParamsProps } from '@repo/types';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';
import { Section } from '@repo/ui/layouts/section';

import { TagsList } from '@/features/quotes/components/tag-list';

export { generateMetadata };

const TagsPage = async ({
  searchParams,
  params,
}: SearchParamsProps & LocalesParams) => {
  const searchParamsData = await searchParams;
  const { tags } = await getTags(searchParamsData);
  const { lng } = await params;
  const content = await getTagsContent(lng);

  return (
    <Container size='2'>
      <Section className='h-full justify-center m-0'>
        <Header summary={content.summary} title={content.title} />

        <TagsList tags={tags} />
      </Section>
    </Container>
  );
};

export default TagsPage;
