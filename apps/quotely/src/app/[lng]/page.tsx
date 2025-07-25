import { generateMetadata, getHomeContent } from '@repo/content/quotely/home';
import type { LocalesParams } from '@repo/content/utils/locales';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

import { AuthorsSection } from '@/features/home/components/authors-section';
import { DaySection } from '@/features/home/components/day-section';
import { TagsSection } from '@/features/home/components/tags-section';

export { generateMetadata };

const HomePage = async ({ params }: LocalesParams) => {
  const { lng } = await params;
  const { sections } = await getHomeContent(lng);

  return (
    <Container className='mt-5' size='3'>
      <Header {...sections.header} />
      <DaySection {...sections.day} />
      <TagsSection {...sections.tags} />
      <AuthorsSection {...sections.authors} />
    </Container>
  );
};

export default HomePage;
