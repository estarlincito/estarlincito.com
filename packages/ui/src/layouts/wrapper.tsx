import { Flex, type FlexProps } from '@radix-ui/themes';

export const Wrapper = (props: FlexProps) => {
  return (
    <Flex
      direction='column'
      gap='5'
      p='5'
      {...props}
      align={props.align}
      justify='center'
      minHeight='90vh'
    >
      {props.children}
    </Flex>
  );
};
