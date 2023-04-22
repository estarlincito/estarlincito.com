import { Imagedoc, Linkdoc } from '@/components/HOC';
import { _Anchor } from '@/types';
import { Logo } from '@UI/atoms';

interface Props {
  route: string;
  label: string;
}

const Brand: React.FC<Props> = ({ route, label }) => {
  return (
    <Linkdoc
      href={route}
      target='_self'
      className='flex flex-row items-center gap-x-3'
    >
      <Logo />

      <span className='text-lg'>{label}</span>
    </Linkdoc>
  );
};

export default Brand;
