import { TitleProps } from '@/types';
import clsx from 'clsx';

const Title: React.FC<TitleProps> = ({ text, size, className }) => {
  return (
    <h1 className={clsx('font-bold', size, className && className)}>{text}</h1>
  );
};

export default Title;
