import { Blockquote as Blockquoter } from '@radix-ui/themes';

const Blockquote = (props: any) => {
  return <Blockquoter my='5'>{props.children} </Blockquoter>;
};

export default Blockquote;
