import { ChildrenProps } from '@/types';
import clsx from 'clsx';

const Blockquote: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <blockquote
      className={clsx(
        'border-l-2 pl-3 border-slate-600 border:text-slate-400',
        'font-light text-neutral-600 dark:text-neutral-400'
      )}
    >
      {children}
    </blockquote>
  );
};

export default Blockquote;
