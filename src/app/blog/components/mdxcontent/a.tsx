import { Link } from '@radix-ui/themes';

const A = (props: any) => {
  const { children, href } = props;

  const target = href!.includes('https://estarlincito.com');

  if (href!.includes('http://')) {
    throw new Error("You have 'http://' please change");
  }

  return (
    <Link
      href={href !== undefined ? href : '/no-found'}
      target={target == true ? '_self' : '_blank'}
    >
      {children}
    </Link>
  );
};

export default A;
