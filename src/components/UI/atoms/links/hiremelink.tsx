import { _Link } from '@/components/HOC';
import { TbBrandHipchat } from 'react-icons/tb';

const HireMeLink = () => {
  return (
    <_Link href='/contact' target='_self' className='text-2xl'>
      <TbBrandHipchat />
    </_Link>
  );
};

export default HireMeLink;
