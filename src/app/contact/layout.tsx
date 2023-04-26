import { Container, Wrapper } from '@/components/UI/organisms';
import { ChildrenProps } from '@/types';

const ContactLayout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default ContactLayout;
