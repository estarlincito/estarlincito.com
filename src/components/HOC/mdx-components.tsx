import { Blockquote, Linkdoc, Imagedoc } from '@/components/HOC';
import { Children, _mdxComponents } from '@/types';
import { dateFormat } from '@/utils';
import clsx from 'clsx';
import { TbCalendarDue } from 'react-icons/tb';

//Types
type _Blockquote = React.FC<JSX.IntrinsicElements['blockquote']>;
type _Image = React.FC<JSX.IntrinsicElements['img']>;
type _Author = React.FC<JSX.IntrinsicElements['div']>;
type _A = React.FC<JSX.IntrinsicElements['a']>;
type _H2 = React.FC<JSX.IntrinsicElements['h2']>;
type _Strong = React.FC<JSX.IntrinsicElements['strong']>;
type _Code = React.FC<JSX.IntrinsicElements['code']>;

export const mdxComponents = ({
  author,
  avathar,
  cover,
  coverAlt,
  updated,
}: _mdxComponents) => {
  const MdxA: _A = ({ children, href }) => {
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

  const MdxNoTag: React.FC<Children> = ({ children }) => {
    return <>{children}</>;
  };

  const MdxConclusion: React.FC<Children> = ({ children }) => {
    return (
      <>
        <h2 className='font-bold'>Conclusión</h2>
        {children}
      </>
    );
  };

  const MdxImage: _Image = ({ src, alt, className }) => {
    return <Imagedoc src={src!} alt={alt!} className={className} />;
  };

  const MdxCover: _Image = () => {
    return <Imagedoc src={cover} alt={coverAlt} />;
  };

  const MdxAuthor: _Author = () => {
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

  const MdxH2: _H2 = ({ children }) => {
    return <h2 className='font-bold'>{children}</h2>;
  };

  const MdxStrong: _Strong = ({ children }) => {
    return <strong className='font-bold'>{children}</strong>;
  };

  const MdxBlockquote: _Blockquote = ({ children }) => {
    return (
      <Blockquote
        className={clsx(
          'text-base border-l-2 pl-3',
          'border-slate-600 dark:border-slate-400'
        )}
      >
        {children}
      </Blockquote>
    );
  };

  const MdxCode: _Code = ({ children }) => {
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
