import { Heading, type HeadingProps } from '@radix-ui/themes';
interface Props extends HeadingProps {
  contents: string;
}

export const Title = (props: Props) => {
  return (
    <Heading
      {...props}
      size={props.size ? props.size : { initial: '6', lg: '8' }}
    >
      {props.contents}
    </Heading>
  );
};
