import { Linkdoc } from '@/components/HOC';

//Types
interface Props {
  children: React.ReactNode;
  href: string;
}

const Li: React.FC<Props> = ({ children, href }) => {
  return (
    <li>
      <Linkdoc
        href={href}
        target='_self'
        className='flex flex-row items-center gap-x-[1px]'
      >
        {children}
      </Linkdoc>
    </li>
  );
};

export default Li;
