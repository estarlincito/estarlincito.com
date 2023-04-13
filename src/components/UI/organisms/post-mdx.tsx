import { Linkdoc } from '@/components/HOC';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

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

//_Image
interface PropsImage {
  alt: string;
  src: string;
  width: number;
  height: number;
}
const _Image: React.FC<PropsImage> = ({ alt, src, width, height }) => {
  return (
    <Image className='my-3' alt={alt} src={src} width={width} height={height} />
  );
};

const mdxComponents = {
  Image: _Image,
  h2: H2,
  a: A,
  strong: Strong,
  blockquote: Blockquote,
};

const PostMdx = ({ doc }: { doc: string }) => {
  const MDXContent = useMDXComponent(doc);
  return <MDXContent components={mdxComponents} />;
};
export default PostMdx;
