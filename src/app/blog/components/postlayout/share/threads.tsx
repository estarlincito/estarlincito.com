import { Link } from '@radix-ui/themes';
import { FaThreads } from 'react-icons/fa6';
import IconBTN from './Icon_btn';

interface ThreadsProps {
  summary: string;
  url: string;
  tag: string;
}

const Threads = ({ summary, url, tag }: ThreadsProps) => {
  const line_break = '%0A';
  const contents = `${summary}${line_break}${line_break}${tag.toLowerCase()}${line_break}${line_break}estarlincito.com${url}`;
  return (
    <Link
      href={`https://threads.net/intent/post?text=${contents}`}
      target='_blank'
    >
      <IconBTN>
        <FaThreads />
      </IconBTN>
    </Link>
  );
};

export default Threads;
