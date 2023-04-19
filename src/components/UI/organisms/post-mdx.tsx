import { Imagedoc, Linkdoc } from '@/components/HOC';
import { useMDXComponent } from 'next-contentlayer/hooks';

const A: React.FC<JSX.IntrinsicElements['a']> = ({ children, href }) => {
  return (
    <Linkdoc href={href !== undefined ? href : '/no-found'} target='_blank'>
      {children}
    </Linkdoc>
  );
};

const H2: React.FC<JSX.IntrinsicElements['h2']> = ({ children }) => {
  return <h2 className='font-bold'>{children}</h2>;
};

const Strong: React.FC<JSX.IntrinsicElements['strong']> = ({ children }) => {
  return <strong className='font-bold'>{children}</strong>;
};

const Blockquote: React.FC<JSX.IntrinsicElements['blockquote']> = ({
  children,
}) => {
  return (
    <blockquote className='font-thin border-l-2 pl-3 border-red-400'>
      {children}
    </blockquote>
  );
};

const Code: React.FC<JSX.IntrinsicElements['code']> = ({ children }) => {
  return <code className='text-red-500'>{children}</code>;
};

const mdxComponents = {
  Image: Imagedoc,
  h2: H2,
  a: A,
  strong: Strong,
  blockquote: Blockquote,
  code: Code,
};

const PostMdx = ({ doc }: { doc: string }) => {
  const MDXContent = useMDXComponent(doc);
  return <MDXContent components={mdxComponents} />;
};
export default PostMdx;
