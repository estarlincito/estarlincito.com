import { _Link } from '@/components/HOC';
import { TbBrandTwitter } from 'react-icons/tb';

const TwitterLink = () => {
  return (
    <_Link
      href='https://twitter.com/estarlincito'
      target='_blank'
      className='text-2xl'
    >
      <TbBrandTwitter />
    </_Link>
  );
};

export default TwitterLink;
