import { _Link, Paragraph } from '@/components/HOC';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

const P: React.FC<JSX.IntrinsicElements['p']> = ({ children }) => {
  return <Paragraph className='mb-4'>{children}</Paragraph>;
};

const A: React.FC<JSX.IntrinsicElements['a']> = ({ children, href }) => {
  return (
    <_Link href={href !== undefined ? href : '/no-found'} target='_blank'>
      {children}
    </_Link>
  );
};

const H1: React.FC<JSX.IntrinsicElements['h1']> = ({ children }) => {
  return (
    <h1 className='my-5 text-2xl font-bold text-neutral-900 dark:text-neutral-300'>
      {children}
    </h1>
  );
};

const H2: React.FC<JSX.IntrinsicElements['h2']> = ({ children }) => {
  return (
    <h2 className='my-5 text-xl font-bold text-neutral-900 dark:text-neutral-300'>
      {children}
    </h2>
  );
};

const Strong: React.FC<JSX.IntrinsicElements['strong']> = ({ children }) => {
  return (
    <strong className='font-bold text-neutral-900 dark:text-neutral-300'>
      {children}
    </strong>
  );
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
  p: P,
  h1: H1,
  h2: H2,
  a: A,
  strong: Strong,
  blockquote: Blockquote,
};

const ArticleMdx = ({ doc }: { doc: string }) => {
  const MDXContent = useMDXComponent(doc);
  return <MDXContent components={mdxComponents} />;
};
export default ArticleMdx;
