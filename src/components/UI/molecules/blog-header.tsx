import { Blockquote, Title } from '@/components/HOC';
import clsx from 'clsx';

//Types
interface Props {
  title: string;
  sumary: string;
  unmargin?: boolean;
}

const BlogHeader: React.FC<Props> = ({ title, sumary, unmargin }) => {
  return (
    <div className={clsx('mb-16', unmargin === undefined ? 'mx-8' : '')}>
      <Title text={title} size='text-2xl' className='mb-3' />
      <Blockquote>{sumary}</Blockquote>
    </div>
  );
};

export default BlogHeader;
