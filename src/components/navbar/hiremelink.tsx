import Linkdoc from '@/components/UI/linkdoc';
import { TbBrandHipchat } from 'react-icons/tb';

const HireMeLink = () => {
  return (
    <Linkdoc href='/contact' target='_self' size='text-2xl'>
      <TbBrandHipchat />
    </Linkdoc>
  );
};

export default HireMeLink;
