import { Imagedoc } from '@/components/HOC';
import { ImagedocProps } from '@/types';

const Image: React.FC<ImagedocProps> = ({ src, alt, className }) => {
  return <Imagedoc src={src!} alt={alt!} className={className} />;
};

export default Image;
