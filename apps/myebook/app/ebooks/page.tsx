import { METADATA, SECTIONS } from '@app/myebook/constants/ebooks';
import { GenerateMetadata } from '@estarlincito/utils';
import type { SearchParamsProps } from '@repo/types';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

export const metadata = GenerateMetadata.website(METADATA);
// SearchParamsProps
const Ebooks = async ({ searchParams }: SearchParamsProps) => {
  const searchParamsData = await searchParams;
  console.log(searchParamsData);
  return (
    <Container>
      <Header {...SECTIONS.HEADER} />
    </Container>
  );
};

export default Ebooks;
