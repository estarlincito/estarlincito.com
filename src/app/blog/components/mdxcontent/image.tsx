import Imagedoc from '@/components/UI/imagedoc';
import ImageProps from '@/types/image';

const Image = (props: ImageProps) => {
  const { src, alt, className } = props;

  return <Imagedoc src={src!} alt={alt!} className={className} />;
};

export default Image;
