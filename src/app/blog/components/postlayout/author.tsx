import Imagedoc from '@/components/UI/imagedoc';
import Linkdoc from '@/components/UI/linkdoc';
import dateFormat from '@/lib/dateFormat';
import clsx from 'clsx';
import { TbCalendarDue } from 'react-icons/tb';

interface AuthorProps {
  author: string;
  avathar: string;
  updated: string;
  className?: string;
}

const Author = (props: AuthorProps) => {
  return (
    <div className={clsx('ml-5 mb-5 mt-5', props.className && props.className)}>
      <div className=' flex flex-row items-center gap-x-5'>
        <div className='w-16'>
          <Imagedoc
            src={props.avathar}
            alt='Avathar'
            className='rounded-full'
          />
        </div>
        <p>
          Publicado por{' '}
          <Linkdoc target='_self' href='https://estarlincito.com'>
            {props.author}
          </Linkdoc>
        </p>
      </div>

      <div className='mt-3 flex flex-row items-center gap-x-2'>
        <i className='text-slate-600 dark:text-slate-400'>
          <TbCalendarDue />
        </i>
        <span>
          <b>Última actualización:</b>&nbsp;
          <time dateTime={props.updated}>{dateFormat(props.updated)}</time>
        </span>
      </div>
    </div>
  );
};

export default Author;
