import clsx from 'clsx';
import { MouseEventHandler, ReactNode } from 'react';

interface Prosp {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  styled?: 'none';
  className?: string;
}

const Button: React.FC<Prosp> = ({ children, onClick, className, styled }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        styled === undefined &&
          'hover:text-sky-700 font-bold active:text-sky-900 text-sky-600 dark:hover:text-sky-600 dark:active:text-sky-900 dark:text-sky-400',

        className && className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
