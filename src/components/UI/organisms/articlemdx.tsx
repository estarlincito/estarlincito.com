import { _Link, Paragraph } from '@/components/HOC';
import { useMDXComponent } from 'next-contentlayer/hooks';

const P = (props: JSX.IntrinsicElements['p']) => {
  return <Paragraph className='mb-4'>{props.children}</Paragraph>;
};

const A = (props: JSX.IntrinsicElements['a']) => {
  return (
    <_Link
      href={props.href !== undefined ? props.href : '/no-found'}
      target='_blank'
    >
      {props.children}
    </_Link>
  );
};

const H1 = (props: JSX.IntrinsicElements['h1']) => {
  return (
    <h1 className='my-5 text-2xl font-bold text-neutral-900 dark:text-neutral-300'>
      {props.children}
    </h1>
  );
};

const H2 = (props: JSX.IntrinsicElements['h2']) => {
  return (
    <h2 className='my-5 text-xl font-bold text-neutral-900 dark:text-neutral-300'>
      {props.children}
    </h2>
  );
};

const Strong = (props: JSX.IntrinsicElements['strong']) => {
  return (
    <strong className='font-bold text-neutral-900 dark:text-neutral-300'>
      {props.children}
    </strong>
  );
};

const Blockquote = (props: JSX.IntrinsicElements['blockquote']) => {
  return (
    <blockquote className='font-thin border-l-2 pl-3 border-red-400'>
      {props.children}
    </blockquote>
  );
};

const mdxComponents = {
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
