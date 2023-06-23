import Container from '@/components/container';
import ChildrenProps from '@/types/children';

const BlogLayout = (props: ChildrenProps) => {
  return <Container>{props.children}</Container>;
};

export default BlogLayout;
