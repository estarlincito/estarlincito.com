import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  className?: string;
}
const Main: React.FC<Props> = ({ children, className }) => {
  return (
    <main
      className={clsx(
        'container mx-auto my-16 min-h-[80vh] pt-5 md:pt-16',
        className && className
      )}
    >
      {children}
    </main>
  );
};

export default Main;
