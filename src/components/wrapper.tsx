import { Flex } from '@radix-ui/themes';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = (props: WrapperProps) => {
  return (
    <Flex direction='column' gap='5' p='5'>
      {props.children}
    </Flex>
  );
};

export default Wrapper;
