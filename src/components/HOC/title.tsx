import clsx from 'clsx';

//Types
interface Props {
  text: string;
  size: 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl' | 'text-4xl';
  className?: string;
}

const Title: React.FC<Props> = ({ text, size, className }) => {
  return (
    <h1 className={clsx('font-bold', size, className && className)}>{text}</h1>
  );
};

export default Title;
