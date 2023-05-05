'use client';
import { Linkdoc } from '@/components/HOC';

//Types
interface Props {
  children: React.ReactNode;
  href: string;
}

const Li: React.FC<Props> = ({ children, href }) => {
  return (
    <li>
      <Linkdoc href={href} target='_self' orden='horizontally'>
        {children}
      </Linkdoc>
    </li>
  );
};

export default Li;
