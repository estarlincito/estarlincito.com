import clsx from 'clsx';

//Types
interface Props {
  className: string;
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children, className }) => {
  return <div className={clsx('animate-pulse', className)}>{children}</div>;
};

export default Container;
