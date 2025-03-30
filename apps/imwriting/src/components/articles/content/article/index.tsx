import { useMDXComponent } from 'next-contentlayer/hooks';
import React from 'react';

import A from './a';
import Audio from './audio';
import Blockquote from './blockquote';
import Code from './code';
import Contents from './contents';
import Empty from './empty';
import H2 from './h2';
import Image from './image';
import Ol from './ol';
import Strong from './strong';

const mdxComponents = {
  a: A,
  Audio,
  blockquote: Blockquote,
  code: Code,
  Contents,
  h2: H2,
  Image,
  Introduction: Empty,
  ol: Ol,
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
