import { useMDXComponent } from 'next-contentlayer/hooks';
import { mdxComponents } from './mdx-components';

interface Props {
  doc: string;
}

const Post: React.FC<Props> = ({ doc }) => {
  const MDXContent = useMDXComponent(doc);
  return <MDXContent components={mdxComponents} />;
};
export default Post;
