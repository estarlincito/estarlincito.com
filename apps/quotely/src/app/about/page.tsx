import { quotely } from '@repo/constants';
import { getPathname } from '@repo/lib';
import { Overview, Wrapper } from '@repo/ui';
import { headers } from 'next/headers';

const { about } = quotely;

export const { metadata } = about;

const AboutPage = async () => {
  const pathname = await getPathname(headers);

  return (
    <Wrapper align='start' size='3'>
      <Overview {...about.overview} pathname={pathname} title={about.title} />
    </Wrapper>
  );
};

export default AboutPage;
