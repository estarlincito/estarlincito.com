import Imagen from '@/components/UI/image';
import ImageProps from '@/types/image';
import { Box } from '@radix-ui/themes';

const Image = (props: ImageProps) => {
  const { src, alt, className } = props;

  return (
    <Box my='5'>
      <Imagen src={src!} alt={alt!} className='-rounded-lg' />
    </Box>
  );
};

export default Image;
