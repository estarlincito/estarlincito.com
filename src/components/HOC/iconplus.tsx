import { IconPlusProps } from '@/types';
import clsx from 'clsx';

const IconPlus: React.FC<IconPlusProps> = ({ children, className }) => {
  return (
    <li
      className={clsx(
        'flex flex-row items-center gap-x-1',
        className && className
      )}
    >
      {children}
    </li>
  );
};

export default IconPlus;
