import { Flex } from '@radix-ui/themes';

const Contents = (props: any) => {
  return (
    <Flex direction='column' gap='5'>
      {props.children}
    </Flex>
  );
};

export default Contents;
