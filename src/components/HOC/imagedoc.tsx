import clsx from 'clsx';
import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  className?: string;
}
const Imagedoc: React.FC<Props> = ({ src, alt, className }) => {
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
