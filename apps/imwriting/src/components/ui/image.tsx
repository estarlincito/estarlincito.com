/* eslint-disable @next/next/no-img-element */
import { AspectRatio } from '@radix-ui/themes';
import stylez from '@stylezjs/stylez';
import React from 'react';

const styles = {
  img: stylez.create({
    borderRadius: 'var(--radius-2)',
    height: '100%',
    objectFit: 'cover',
    width: '100%',
  }),
};

interface Props {
  src: string;
  alt: string;
}
const Image = ({ src, alt }: Props) => {
  return (
    <AspectRatio ratio={16 / 10}>
      <img src={src} alt={alt} {...stylez.className(styles.img)} />
    </AspectRatio>
  );
};

export default Image;
