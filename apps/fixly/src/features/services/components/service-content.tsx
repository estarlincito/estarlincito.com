import { Heading } from '@repo/ui/components/heading';
import { Text } from '@repo/ui/components/text';
import { withDefaultProps } from '@repo/ui/hocs/default-props';
import { Flex } from '@repo/ui/layouts/flex';
import { useMDXComponent } from 'next-mdxlayer/hooks';

interface ContentProps {
  code: string;
}

export const ServiceContent = ({ code }: ContentProps) => {
  const MDXComponent = useMDXComponent(code);

  return (
    <Flex className='flex-col mt-10 mb-5'>
      <MDXComponent
        components={{
          h2: withDefaultProps(Heading, { as: 'h2' }),
          p: Text,
        }}
      />
    </Flex>
  );
};
