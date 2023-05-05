import { Imagedoc, Linkdoc } from '@/components/HOC';
import { dateFormat } from '@/lib';
import clsx from 'clsx';
import { TbCalendarDue } from 'react-icons/tb';

//Types
interface Props {
  author: string;
  avathar: string;
  updated: string;
  className?: string;
}

const Author: React.FC<Props> = ({ author, avathar, updated, className }) => {
  return (
    <div className={clsx('ml-5 mb-3', className && className)}>
      <div className=' flex flex-row items-center gap-x-5'>
        <div className='w-16'>
          <Imagedoc src={avathar} alt='Avathar' className='rounded-full' />
        </div>
        <p>
          Publicado por{' '}
          <Linkdoc target='_self' href='https://estarlincito.com'>
            {author}
          </Linkdoc>
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

export default Author;
