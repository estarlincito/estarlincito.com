import { TagsList } from '@app/quotely/components/tag-list';
import { METADATA, SECTIONS } from '@app/quotely/constants/tags';
import { getTags } from '@app/quotely/lib/quotes';
import { GenerateMetadata } from '@estarlincito/utils';
import type { SearchParamsProps } from '@repo/types';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';
import { Section } from '@repo/ui/layouts/section';

export const metadata = GenerateMetadata.website(METADATA);

const TagsPage = async ({ searchParams }: SearchParamsProps) => {
  const searchParamsData = await searchParams;
  const { tags } = await getTags(searchParamsData);

  return (
    <Container size='2'>
      <Section className='h-full justify-center m-0'>
        <Header {...SECTIONS.HEADER} />

        <TagsList tags={tags} />
      </Section>
    </Container>
  );
};

export default TagsPage;
