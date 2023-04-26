import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  className?: string;
}
const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <main
      className={clsx(
        'container mx-auto mt-16 py-5 md:py-16',
        'max-w-6xl min-h-[80vh]',
        className && className
      )}
    >
      {children}
    </main>
  );
};

export default Container;
