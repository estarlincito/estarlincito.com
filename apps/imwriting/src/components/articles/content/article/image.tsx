import { Box } from '@radix-ui/themes';
import React, { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

import MyImage from '@/components/ui/image';

type Props = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const Image = ({ src, alt }: Props) => {
  return (
    <Box my='5'>
      <MyImage src={src!} alt={alt!} />
    </Box>
  );
};

export default Image;
