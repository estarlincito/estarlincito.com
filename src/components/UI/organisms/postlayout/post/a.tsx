import { Linkdoc } from '@/components/HOC';

const A: React.FC<JSX.IntrinsicElements['a']> = ({ children, href }) => {
  const target = href!.includes('https://estarlincito.com');

  //https only mode
  if (href!.includes('http://')) {
    throw new Error("You have 'http://' please change");
  }

  return (
    <Linkdoc
      href={href !== undefined ? href : '/no-found'}
      target={target == true ? '_self' : '_blank'}
      underline={true}
      color='sky'
    >
      {children}
    </Linkdoc>
  );
};

export default A;
