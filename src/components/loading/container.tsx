import clsx from 'clsx';
import { ReactNode } from 'react';

interface Props {
  className: string;
  children: ReactNode;
}
const Container: React.FC<Props> = ({ children, className }) => {
  return <div className={clsx('animate-pulse', className)}>{children}</div>;
};

export default Container;
