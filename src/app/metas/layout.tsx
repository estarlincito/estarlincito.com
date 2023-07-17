import Container from '@/components/container';
import Wrapper from '@/components/wrapper';
import ChildrenProps from '@/types/children';

const MetasLayout = (props: ChildrenProps) => {
  return (
    <Container>
      <Wrapper>{props.children}</Wrapper>
    </Container>
  );
};

export default MetasLayout;
