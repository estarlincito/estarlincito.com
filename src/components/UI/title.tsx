import { Heading } from '@radix-ui/themes';

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return <Heading size='7'>{text}</Heading>;
};

export default Title;
