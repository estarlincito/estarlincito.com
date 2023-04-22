import { mdxComponents } from '@/components/HOC';
import { _mdxComponents } from '@/types';
import { useMDXComponent } from 'next-contentlayer/hooks';

interface Props extends _mdxComponents {
  doc: string;
}

const PostMdx: React.FC<Props> = ({
  doc,
  author,
  avathar,
  cover,
  coverAlt,
  updated,
}) => {
  const resorce = mdxComponents({
    author,
    avathar,
    cover,
    coverAlt,
    updated,
  });

  const MDXContent = useMDXComponent(doc);
  return <MDXContent components={resorce} />;
};
export default PostMdx;
