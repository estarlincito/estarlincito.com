import { Container, Wrapper } from '@/components/UI/organisms';
import { ChildrenProps } from '@/types';

const NoteLayout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default NoteLayout;
