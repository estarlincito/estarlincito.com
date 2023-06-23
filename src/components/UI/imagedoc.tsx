import ImageProps from '@/types/image';
import clsx from 'clsx';
import Image from 'next/image';

const Imagedoc = (props: ImageProps) => {
  const { src, alt, className } = props;

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
