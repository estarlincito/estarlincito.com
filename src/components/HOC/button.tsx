import { ButtonProsp } from '@/types';
import clsx from 'clsx';

const Button: React.FC<ButtonProsp> = ({ children, onClick, className }) => {
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
