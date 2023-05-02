'use client';
import { Linkdoc } from '@/components/HOC';
import { usePathname } from 'next/navigation';

//Types
interface Props {
  children: React.ReactNode;
  href: string;
}

const Li: React.FC<Props> = ({ children, href }) => {
  return (
    <li>
      <Linkdoc href={href} target='_self' orden='center'>
        {children}
      </Linkdoc>
    </li>
  );
};

export default Li;
