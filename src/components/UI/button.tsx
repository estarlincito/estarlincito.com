import clsx from 'clsx';
import { MouseEventHandler, ReactNode } from 'react';

interface ButtonProsp {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button = (props: ButtonProsp) => {
  const { children, onClick, className } = props;

  return (
    <button
      onClick={onClick}
      className={clsx(
        'font-bold hover:text-sky-600 active:text-sky-800',
        className && className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
