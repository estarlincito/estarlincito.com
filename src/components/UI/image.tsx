import ImageProps from '@/types/image';
import Imagen from 'next/image';

const Image = ({ src, alt, className }: ImageProps) => {
  return (
    <Imagen
      src={src}
      alt={alt}
      width={2160}
      height={720}
      className={className && className}
      priority
    />
  );
};

export default Image;
