import clsx from 'clsx';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = (props: ContainerProps) => {
  return (
    <main
      className={clsx(
        'container mx-auto mt-16',
        'py-5 md:py-16',
        'max-w-6xl min-h-[80vh]',
        props.className && props.className
      )}
    >
      {props.children}
    </main>
  );
};

export default Container;
