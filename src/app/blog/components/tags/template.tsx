import ChildrenProps from '@/types/children';
import { Flex } from '@radix-ui/themes';

const Template = ({ children }: ChildrenProps) => {
  return (
    <Flex
      justify='center'
      align='center'
      minHeight='80vh'
      gap='5'
      direction='column'
    >
      {children}
    </Flex>
  );
};

export default Template;
