import { Linkdoc } from '@/components/HOC';

const A: React.FC<JSX.IntrinsicElements['a']> = ({ children, href }) => {
  const target = href!.includes('https://');
  return (
    <Linkdoc
      href={href !== undefined ? href : '/no-found'}
      target={target == true ? '_blank' : '_self'}
      className='text-sky-600 dark:text-sky-400'
    >
      {children}
    </Linkdoc>
  );
};

export default A;
