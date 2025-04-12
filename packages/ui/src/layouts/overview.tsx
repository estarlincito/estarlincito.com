import { type schema } from '@repo/constants';

import { Bio } from '@/components/ui/bio.jsx';
import { Flex } from '@/components/ui/index.js';
import { Text } from '@/components/ui/text.jsx';

import { Header } from './header.jsx';
import { Topics } from './topics.jsx';

interface Props extends schema.OverviewTypes {
  title: string;
  pathname: string;
}

export const Overview = ({
  closing,
  greeting,
  mission,
  topics,
  title,
  pathname,
}: Props) => (
  <Flex direction='column' gapY='5'>
    <Header
      links={[{ href: '/about', title }]}
      pathname={pathname}
      summary={greeting}
      title={title}
    />

    <Bio />
    <Text content={mission} />
    <Topics topics={topics} />
    <Text content={closing} mt='5' />
  </Flex>
);
