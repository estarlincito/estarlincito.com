import { Blockquote } from '@radix-ui/themes';

interface Props {
  contents: string;
}

export const Summary = ({ contents }: Props) => {
  return <Blockquote>{contents}</Blockquote>;
};
