import { Linkdoc } from '@/components/HOC';
import { BrandProps } from '@/types';
import { Logo } from '@UI/atoms';

const Brand: React.FC<BrandProps> = ({ route, label }) => {
  return (
    <div className='flex flex-row items-center gap-x-3'>
      <span className='hidden md:block'>
        <Logo />
      </span>

      <Linkdoc href={route} target='_self'>
        <span className='md:text-lg'>{label}</span>
      </Linkdoc>
    </div>
  );
};

export default Brand;
