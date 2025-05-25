import { Audio } from '@app/imwriting/components/articles/content/article/audio';
import { Ol } from '@app/imwriting/components/articles/content/article/ol';
import { Strong } from '@app/imwriting/components/articles/content/article/strong';
import { Blockquote } from '@repo/ui/components/blockquote';
import { Code } from '@repo/ui/components/code';
import { Heading } from '@repo/ui/components/heading';
import { Image } from '@repo/ui/components/image';
import { Link } from '@repo/ui/components/link';
import { Text } from '@repo/ui/components/text';
import { withDefaultProps } from '@repo/ui/hocs/default-props';
import { Flex } from '@repo/ui/layouts/flex';
import { useMDXComponent } from 'next-contentlayer/hooks';

const mdxComponents = {
  a: Link,
  Audio,
  blockquote: Blockquote,
  code: Code,
  Contents: withDefaultProps(Flex, {
    className: 'flex-col gap-y-5',
  }),
  // em: Em,
  h1: withDefaultProps(Heading, { as: 'h1' }),
  h2: withDefaultProps(Heading, { as: 'h2' }),
  h3: withDefaultProps(Heading, { as: 'h3' }),
  h4: withDefaultProps(Heading, { as: 'h4' }),
  Image,
  ol: Ol,
  p: withDefaultProps(Text, { unstyled: true }),
  span: withDefaultProps(Text, { as: 'span' }),
  strong: Strong,
};

interface Props {
  doc: string;
}

export const Article = ({ doc }: Props) => {
  const MDXContent = useMDXComponent(doc);

  return <MDXContent components={mdxComponents} />;
};
