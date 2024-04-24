/* eslint-disable @next/next/no-img-element */
import ImageProps from '@/types/image';
import { AspectRatio } from '@radix-ui/themes';

const Image = ({ src, alt }: ImageProps) => {
  return (
    <AspectRatio ratio={16 / 10}>
      <img
        src={src}
        alt={alt}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          borderRadius: 'var(--radius-2)',
        }}
      />
    </AspectRatio>
  );
};

export default Image;
