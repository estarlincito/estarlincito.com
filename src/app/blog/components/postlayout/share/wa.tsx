import { Link } from '@radix-ui/themes';
import { FaWhatsapp } from 'react-icons/fa6';
import IconBTN from './Icon_btn';

interface WaProps {
  url: string;
  summary: string;
}

const Wa = ({ url, summary }: WaProps) => {
  const line_break = '%0A';
  const contents = `_${summary}_${line_break}${line_break}estarlincito.com${url}`;
  return (
    <Link href={`whatsapp://send?text=${contents}`}>
      <IconBTN>
        <FaWhatsapp />
      </IconBTN>
    </Link>
  );
};

export default Wa;
