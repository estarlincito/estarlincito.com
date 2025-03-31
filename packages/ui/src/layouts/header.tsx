import { Flex, Separator } from '@radix-ui/themes';

import { Summary, Title } from '../components/index.js';

interface Props {
  title: string;
  summary: string;
}

export const Header = ({ title, summary }: Props) => {
  return (
    <Flex direction='column' width='100%' gapY='1'>
      <Title contents={title} />
      <Summary contents={summary} />
      <Separator orientation='horizontal' size='4' mt='2' />
    </Flex>
  );
};
