import { mdxComponents } from '@/components/HOC';
import { PostMdxProps } from '@/types';
import { useMDXComponent } from 'next-contentlayer/hooks';

const PostMdx: React.FC<PostMdxProps> = ({
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
