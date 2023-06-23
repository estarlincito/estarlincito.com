import Bquote from '@/components/UI/blockquote';

const Blockquote = (props: any) => {
  return <Bquote className='-order-2'>{props.children}</Bquote>;
};

export default Blockquote;
