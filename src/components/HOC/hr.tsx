import { ClassProps } from '@/types';
import clsx from 'clsx';

const Hr: React.FC<ClassProps> = ({ className }) => {
  return (
    <hr
      className={clsx(
        'dark:border-neutral-700 border-neutral-300',
        className && className
      )}
    />
  );
};

export default Hr;
