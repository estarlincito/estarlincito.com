import { Linkdoc, Imagedoc, Blockquote } from '@/components/HOC';
import { dateFormat } from '@/lib';
import {
  AProps,
  ImageProps,
  AuthorProps,
  BlockquoteProps,
  ChildrenProps,
  CodeProps,
  H2Props,
  MDXComponents,
  StrongProps,
} from '@/types';

import { TbCalendarDue } from 'react-icons/tb';

export const mdxComponents = ({
  author,
  avathar,
  cover,
  coverAlt,
  updated,
}: MDXComponents) => {
  //A
  const MdxA: AProps = ({ children, href }) => {
    const target = href!.includes('https://');
    return (
      <Linkdoc
        href={href !== undefined ? href : '/no-found'}
        target={target == true ? '_blank' : '_self'}
        className='text-sky-600 dark:text-sky-400'
      >
        {children}
      </Linkdoc>
    );
  };

  // NoTag
  const MdxNoTag: React.FC<ChildrenProps> = ({ children }) => {
    return <>{children}</>;
  };

  //Conclusion
  const MdxConclusion: React.FC<ChildrenProps> = ({ children }) => {
    return (
      <>
        <h2 className='font-bold'>Conclusión</h2>
        {children}
      </>
    );
  };

  //Image
  const MdxImage: ImageProps = ({ src, alt, className }) => {
    return <Imagedoc src={src!} alt={alt!} className={className} />;
  };

  //Cover
  const MdxCover: ImageProps = () => {
    return <Imagedoc src={cover} alt={coverAlt} />;
  };

  //Author
  const MdxAuthor: AuthorProps = () => {
    return (
      <div className='ml-5'>
        <div className=' flex flex-row items-center gap-x-5'>
          <div className='w-16'>
            <Imagedoc src={avathar} alt={coverAlt} className='rounded-full' />
          </div>
          <p>
            Publicado por <MdxA href='https://estarlincito.com'>{author}</MdxA>
          </p>
        </div>

        <div className='mt-2 flex flex-row items-center gap-x-2'>
          <i className='text-slate-600 dark:text-slate-400'>
            <TbCalendarDue />
          </i>
          <span>
            <b>Última actualización:</b>&nbsp;
            <time dateTime={updated}>{dateFormat(updated)}</time>
          </span>
        </div>
      </div>
    );
  };

  //H2
  const MdxH2: H2Props = ({ children }) => {
    return <h2 className='font-bold'>{children}</h2>;
  };

  //Strong
  const MdxStrong: StrongProps = ({ children }) => {
    return <strong className='font-bold'>{children}</strong>;
  };

  //Blockquote
  const MdxBlockquote: BlockquoteProps = ({ children }) => {
    return <Blockquote>{children}</Blockquote>;
  };

  //Code
  const MdxCode: CodeProps = ({ children }) => {
    return <code className='text-red-500'>{children}</code>;
  };

  return {
    Intruduction: MdxNoTag,
    Contents: MdxNoTag,
    Conclusion: MdxConclusion,
    Cover: MdxCover,
    Author: MdxAuthor,
    Image: MdxImage,
    h2: MdxH2,
    a: MdxA,
    strong: MdxStrong,
    blockquote: MdxBlockquote,
    code: MdxCode,
  };
};
