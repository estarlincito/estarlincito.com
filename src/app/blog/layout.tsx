import { Container } from '@/components/UI/organisms';
import { ChildrenProps } from '@/types';

const BlogLayout: React.FC<ChildrenProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default BlogLayout;
