import { Linkdoc } from '@/components/HOC';
import { _Anchor } from '@/types';
import { Logo } from '@UI/atoms';

interface Props {
  route: string;
  label: string;
}

const Brand: React.FC<Props> = ({ route, label }) => {
  return (
    <div className='flex flex-row items-center gap-x-3'>
      <Logo />

      <Linkdoc href={route} target='_self'>
        <span className='text-lg'>{label}</span>
      </Linkdoc>
    </div>
  );
};

export default Brand;
