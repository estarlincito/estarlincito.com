import Conclusion from './conclusion';
import Blockquote from './blockquote';
import Strong from './strong';
import Empty from './empty';
import Image from './image';
import Code from './code';
import H2 from './h2';
import A from './a';

export const mdxComponents = {
  Intruduction: Empty,
  Contents: Empty,
  Conclusion,
  Image,
  h2: H2,
  a: A,
  strong: Strong,
  blockquote: Blockquote,
  code: Code,
};
