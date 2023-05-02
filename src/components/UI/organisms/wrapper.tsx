import clsx from 'clsx';

//Types
interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'p-5 md:max-w-3xl m-auto text-left',
        className && className
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
