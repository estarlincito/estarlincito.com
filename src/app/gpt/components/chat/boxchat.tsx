import { Flex } from '@radix-ui/themes';

interface BoxchatProps {
  children: React.ReactNode;
}

const Boxchat = (props: BoxchatProps) => {
  return (
    <Flex direction='row' gap='5' align='center'>
      {props.children}
    </Flex>
  );
};

export default Boxchat;
