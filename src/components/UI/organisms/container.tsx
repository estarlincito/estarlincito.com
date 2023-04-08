import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  className?: string;
}
const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <main className={clsx('container mx-auto p-2', className && className)}>
      {children}
    </main>
  );
};

export default Container;
