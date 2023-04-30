import { ImagedocProps } from '@/types';
import clsx from 'clsx';
import Image from 'next/image';

const Imagedoc: React.FC<ImagedocProps> = ({ src, alt, className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={2160}
      height={720}
      className={clsx('w-full h-full', '-order-2', className && className)}
      priority
    />
  );
};

export default Imagedoc;
