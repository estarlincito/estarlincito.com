import Linkdoc from '@/components/UI/linkdoc';
import { TbBrandTwitter } from 'react-icons/tb';

const TwitterLink = () => {
  return (
    <Linkdoc
      href='https://twitter.com/estarlincito'
      target='_blank'
      size='text-2xl'
    >
      <TbBrandTwitter />
    </Linkdoc>
  );
};

export default TwitterLink;
