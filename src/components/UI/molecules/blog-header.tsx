import { Blockquote, Title } from '@/components/HOC';
import { Description } from '@/types';

interface Props {
  title: string;
  sumary: Description;
}
const BlogHeader: React.FC<Props> = ({ title, sumary }) => {
  return (
    <div className='mx-8 mb-16'>
      <Title text={title} size='text-2xl' className='mb-3' />
      <Blockquote>{sumary}</Blockquote>
    </div>
  );
};

export default BlogHeader;
