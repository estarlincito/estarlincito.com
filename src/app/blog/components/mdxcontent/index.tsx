import { useMDXComponent } from 'next-contentlayer/hooks';
import A from './a';
import Blockquote from './blockquote';
import Code from './code';
import Conclusion from './conclusion';
import Contents from './contents';
import Empty from './empty';
import H2 from './h2';
import Image from './image';
import Ol from './ol';
import Strong from './strong';

export const mdxComponents = {
  Intruduction: Empty,
  Contents,
  Conclusion,
  Image,
  h2: H2,
  a: A,
  strong: Strong,
  blockquote: Blockquote,
  code: Code,
  ol: Ol,
};

interface Props {
  doc: string;
}

const Post = (props: Props) => {
  const MDXContent = useMDXComponent(props.doc);
  return <MDXContent components={mdxComponents} />;
};
export default Post;
