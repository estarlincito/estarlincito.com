import { Heading, type HeadingProps } from '@radix-ui/themes';

export const SubTitle = (props: HeadingProps) => {
  return (
    <Heading
      weight={props.weight ? props.weight : 'light'}
      {...props}
      size={props.size ? props.size : { initial: '4', lg: '6' }}
    />
  );
};
