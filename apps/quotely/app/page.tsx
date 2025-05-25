import { Authors } from '@app/quotely/components/layout/home/authors';
import { QuoteOfTheDay } from '@app/quotely/components/layout/home/quote-day';
import { Tags } from '@app/quotely/components/layout/home/tags';
import { METADATA, SECTIONS } from '@app/quotely/constants/home';
import { GenerateMetadata } from '@estarlincito/utils';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

export const metadata = GenerateMetadata.website(METADATA);

const Page = () => (
  <Container className='mt-5' size='3'>
    <Header {...SECTIONS.HEADER} />
    <QuoteOfTheDay />
    <Tags />
    <Authors />
  </Container>
);

export default Page;
