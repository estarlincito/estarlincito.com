import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Paragraph: React.FC<Props> = ({ children, className }) => {
  return <p className={clsx(className && className)}>{children}</p>;
};

export default Paragraph;
