import { myebook } from '@repo/constants';
import { Container, Header, type SearchParamsProps } from '@repo/ui';

const { home } = myebook;

export const { metadata } = home;

const Ebooks = async ({ searchParams }: SearchParamsProps) => {
  const searchParamsData = await searchParams;
  return (
    <Container size='4'>
      <Header title={home.title} summary={home.description} />
    </Container>
  );
};

export default Ebooks;
