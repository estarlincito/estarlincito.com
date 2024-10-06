import { Link } from '@radix-ui/themes';
import { FaXTwitter } from 'react-icons/fa6';
import IconBTN from './Icon_btn';

interface XProps {
  url: string;
  summary: string;
  tag: string;
}

const X = ({ url, summary, tag }: XProps) => {
  const line_break = '%0A';
  const contents = `${summary}${line_break}${line_break}${tag.toLowerCase()}${line_break}${line_break}https://estarlincito.com${url}`;

  return (
    <Link
      href={`https://twitter.com/intent/tweet?text=${contents}`}
      target='_blank'
    >
      <IconBTN>
        <FaXTwitter />
      </IconBTN>
    </Link>
  );
};

export default X;
