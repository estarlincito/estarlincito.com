import { IconButton, Link } from '@repo/ui';
import { BiSolidDonateHeart } from 'react-icons/bi';

const KoFi = () => (
  <Link color='red' href='https://ko-fi.com/estarlincito' target='_blank'>
    <IconButton variant='ghost'>
      <BiSolidDonateHeart />
    </IconButton>
  </Link>
);

export default KoFi;
