import { Container } from '@/components/UI/organisms';
import { ChildrenProps } from '@/types';

const ProfileLayout: React.FC<ChildrenProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ProfileLayout;
