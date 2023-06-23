import Container from '@/components/container';
import Wrapper from '@/components/wrapper';
import ChildrenProps from '@/types/children';

const ContactLayout = (props: ChildrenProps) => {
  return (
    <Container>
      <Wrapper>{props.children}</Wrapper>
    </Container>
  );
};

export default ContactLayout;
