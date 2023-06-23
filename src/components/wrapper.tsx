import clsx from 'clsx';

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = (props: WrapperProps) => {
  return (
    <div
      className={clsx(
        'p-5 md:max-w-3xl m-auto text-left',
        props.className && props.className
      )}
    >
      {props.children}
    </div>
  );
};

export default Wrapper;
