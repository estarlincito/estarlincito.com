import { Blockquote as Bquote } from '@/components/HOC';

const Blockquote: React.FC<JSX.IntrinsicElements['blockquote']> = ({
  children,
}) => {
  return <Bquote className='-order-2'>{children}</Bquote>;
};

export default Blockquote;
