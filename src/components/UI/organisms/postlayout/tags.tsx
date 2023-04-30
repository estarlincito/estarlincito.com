import { Linkdoc } from '@/components/HOC';

import clsx from 'clsx';

interface Props {
  tags: string[];
}

const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <div className='text-sm w-80 flex items-center'>
      <h5 className='font-bold'>Tags:</h5>
      <ul className='flex'>
        {tags.map((tag, id) => (
          <li key={id} className='m-1'>
            <Linkdoc
              href={`/blog/tags/${tag}`}
              target='_self'
              font='font-normal'
              className={clsx('text-sky-600', 'dark:text-sky-400')}
            >
              #{tag}
            </Linkdoc>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
