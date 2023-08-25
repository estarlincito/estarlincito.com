import ImageProps from '@/types/image';
import clsx from 'clsx';
import Imagen from 'next/image';

const Image = ({ src, alt, className }: ImageProps) => {
  return (
    <Imagen
      src={src}
      alt={alt}
      width={2160}
      height={720}
      className={clsx(className && className)}
      priority
    />
  );
};

export default Image;
