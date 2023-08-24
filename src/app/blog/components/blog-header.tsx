import Title from '@/components/UI/title';
import { Blockquote } from '@radix-ui/themes';
import clsx from 'clsx';

interface BlogHeaderProps {
  title: string;
  sumary: string;
  unmargin?: boolean;
}

const BlogHeader = (props: BlogHeaderProps) => {
  return (
    <div className={clsx('mb-16', props.unmargin === undefined ? 'mx-8' : '')}>
      <Title text={props.title} />
      <br />
      <Blockquote>{props.sumary}</Blockquote>
    </div>
  );
};

export default BlogHeader;
