import Imagedoc from '@/components/UI/imagedoc';
import ImageProps from '@/types/image';
import clsx from 'clsx';

const Image = (props: ImageProps) => {
  const { src, alt, className } = props;

  return (
    <div className='my-5'>
      <Imagedoc
        src={src!}
        alt={alt!}
        className={clsx(className, 'rounded-sm', 'w-[90%]')}
      />
    </div>
  );
};

export default Image;
