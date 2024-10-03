import ImageProps from '@/types/image';
import { Box } from '@radix-ui/themes';
import Imagen from '@UI/image';

const Image = (props: ImageProps) => {
  const { src, alt } = props;

  return (
    <Box my='5'>
      <Imagen src={src!} alt={alt!} />
    </Box>
  );
};

export default Image;
