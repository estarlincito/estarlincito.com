import Imagen from '@/components/UI/image';
import ImageProps from '@/types/image';
import { Box } from '@radix-ui/themes';
import clsx from 'clsx';

const Image = (props: ImageProps) => {
  const { src, alt, className } = props;

  return (
    <Box my='5'>
      <Imagen
        src={src!}
        alt={alt!}
        className={clsx(className, 'rounded-lg', 'w-[90%]')}
      />
    </Box>
  );
};

export default Image;
