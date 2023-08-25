import { Blockquote as Blockquoter } from '@radix-ui/themes';

const Blockquote = (props: any) => {
  return (
    <>
      <Blockquoter>{props.children} </Blockquoter>
      <br />
    </>
  );
};

export default Blockquote;
