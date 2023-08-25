import Title from '@/components/UI/title';
import { Blockquote, Box } from '@radix-ui/themes';

interface BlogHeaderProps {
  title: string;
  sumary: string;
}

const BlogHeader = (props: BlogHeaderProps) => {
  return (
    <Box mb='9' mx='2'>
      <Title text={props.title} />
      <br />
      <Blockquote>{props.sumary}</Blockquote>
    </Box>
  );
};

export default BlogHeader;
