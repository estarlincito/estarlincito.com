import { Linkdoc } from '@/components/HOC';
import { Logo } from '@UI/atoms';

const Brand = () => {
  return (
    <Linkdoc href='/' target='_self' orden='horizontally'>
      <span className='hidden md:block'>
        <Logo />
      </span>

      <span className='ml-1 md:text-xl font-bold flex items-center'>
        <span className='md:hidden'>E</span>starlincito
      </span>
    </Linkdoc>
  );
};

export default Brand;
