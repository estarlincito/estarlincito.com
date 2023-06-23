import Linkdoc from '@/components/UI/linkdoc';

interface LinkProps {
  children: React.ReactNode;
  href: string;
}

const Link = (props: LinkProps) => {
  return (
    <li>
      <Linkdoc href={props.href} target='_self' orden='horizontally'>
        {props.children}
      </Linkdoc>
    </li>
  );
};

export default Link;
