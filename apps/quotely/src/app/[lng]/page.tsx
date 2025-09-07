import { generateMetadata, getHomeContent } from '@repo/content/quotely/home';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

import { AuthorsSection } from '@/features/home/components/authors-section';
import { DaySection } from '@/features/home/components/day-section';
import { TopicsSection } from '@/features/home/components/topics-section';

const HomePage = async ({ params }: PageProps<'/[lng]'>) => {
  const { sections } = await getHomeContent(params);

  return (
    <Container className='mt-5'>
      <Header {...sections.header} blockquote />
      <DaySection {...sections.day} />
      <TopicsSection {...sections.topics} />
      <AuthorsSection {...sections.authors} />
    </Container>
  );
};

export { HomePage as default, generateMetadata };
