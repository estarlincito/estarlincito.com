import { Flex, Separator } from '@radix-ui/themes';

import { Breadcrumb, Summary, Title } from '../components';
import { Slug } from '../types/slug';

interface Props {
  title: string;
  summary: string;
  slug: Slug;
}

export const Header = ({ title, summary, slug }: Props) => {
  const [firstSlug, secondSlug, thirdSlug] = slug;
  return (
    <Flex direction='column' width='100%' gapY='1'>
      <Breadcrumb
        slug={[firstSlug, secondSlug! && secondSlug, thirdSlug! && thirdSlug]}
      />

      <Title contents={title} />
      <Summary contents={summary} />
      <Separator orientation='horizontal' size='4' mt='2' />
    </Flex>
  );
};
