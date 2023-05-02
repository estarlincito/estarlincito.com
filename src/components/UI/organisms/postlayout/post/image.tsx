import { Imagedoc } from '@/components/HOC';
import { ImageProps } from '@/types';

const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
  return <Imagedoc src={src!} alt={alt!} className={className} />;
};

export default Image;
