import { Blockquote } from '@repo/ui/components/blockquote';
import { Code } from '@repo/ui/components/code';
import { Heading } from '@repo/ui/components/heading';
import { Image } from '@repo/ui/components/image';
import { Link } from '@repo/ui/components/link';
import { Strong } from '@repo/ui/components/strong';
import { Text } from '@repo/ui/components/text';
import { withDefaultProps } from '@repo/ui/hocs/default-props';
import { Flex } from '@repo/ui/layouts/flex';
import { type MDXComponents, useMDXComponent } from 'next-mdxlayer/hooks';
import type {
  AnchorHTMLAttributes,
  ComponentType,
  DetailedHTMLProps,
} from 'react';

import { ContentAudio } from '@/features/articles/components/article-content/content-audio';
import { ContentOl } from '@/features/articles/components/article-content/content-ol';
import { ArticleQuote } from '@/features/articles/components/article-quote';

const mdxComponents: MDXComponents = {
  a: Link as ComponentType<
    DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
  >,
  Audio: ContentAudio,
  blockquote: Blockquote,
  code: Code,
  Contents: withDefaultProps(Flex, {
    className: 'flex-col gap-y-5',
  }),

  h1: withDefaultProps(Heading, { as: 'h1', className: 'mt-10' }),
  h2: withDefaultProps(Heading, { as: 'h2', className: 'mt-10' }),
  h3: withDefaultProps(Heading, { as: 'h3', className: 'mt-10' }),
  h4: withDefaultProps(Heading, { as: 'h4', className: 'mt-10' }),
  Image: withDefaultProps(Image, { className: 'rounded-sm' }),
  ol: ContentOl,
  p: withDefaultProps(Text, { unstyled: true }),
  Quote: ArticleQuote,
  span: withDefaultProps(Text, { as: 'span' }),
  strong: Strong,
};

interface Props {
  content: string;
}

export const ArticleContent = ({ content }: Props) => {
  const MDXContent = useMDXComponent(content);

  return <MDXContent components={mdxComponents} />;
};
