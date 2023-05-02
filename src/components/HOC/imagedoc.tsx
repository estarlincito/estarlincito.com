import { ImageProps } from '@/types';
import clsx from 'clsx';
import Image from 'next/image';

const Imagedoc: React.FC<ImageProps> = ({ src, alt, className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={2160}
      height={720}
      className={clsx('w-full h-full', className && className)}
      priority
    />
  );
};

export default Imagedoc;
