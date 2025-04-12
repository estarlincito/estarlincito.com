import {
  Blockquote,
  Code,
  Em,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  withDefaultProps,
} from '@repo/ui';
import { useMDXComponent } from 'next-contentlayer/hooks';

import Audio from './audio';
import Ol from './ol';
import Strong from './strong';

const mdxComponents = {
  a: Link,
  Audio,
  blockquote: Blockquote,
  code: Code,
  Contents: withDefaultProps(Flex, { direction: 'column', gapY: '5' }),
  em: Em,
  h2: withDefaultProps(Heading, { as: 'h2' }),
  Image,
  ol: Ol,
  p: Text,
  span: withDefaultProps(Text, { as: 'span' }),
  strong: Strong,
};

interface Props {
  doc: string;
}

const Articles = ({ doc }: Props) => {
  const MDXContent = useMDXComponent(doc);

  return <MDXContent components={mdxComponents} />;
};
export default Articles;
