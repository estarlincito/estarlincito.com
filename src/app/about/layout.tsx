import Container from '@/components/container';
import ChildrenProps from '@/types/children';

const BlogLayout = ({ children }: ChildrenProps) => {
  return <Container>{children}</Container>;
};

export default BlogLayout;
