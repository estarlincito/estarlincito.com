import { myebook } from '@repo/constants';
import { Header, type SearchParamsProps, Wrapper } from '@repo/ui';

const { home } = myebook;

export const { metadata } = home;

const Ebooks = async ({ searchParams }: SearchParamsProps) => {
  const searchParamsData = await searchParams;

  return (
    <Wrapper>
      {searchParamsData.limit}
      <Header summary={home.description} title={home.title} />
    </Wrapper>
  );
};

export default Ebooks;
