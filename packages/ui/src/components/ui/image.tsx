/* eslint-disable @next/next/no-img-element */
import { num } from '@estarlincito/utils';
import {
  AspectRatio,
  type AspectRatioProps,
  Box,
  type BoxProps,
} from '@radix-ui/themes';
import stylez from '@stylezjs/stylez';

const styles = {
  img: stylez.create({
    borderRadius: '0.3125rem',
    height: '100%',
    objectFit: 'cover',
    width: '100%',
  }),
};

interface ImageProps extends AspectRatioProps {
  src?: string;
  alt?: string;
}

export const Image = ({ src, alt, ratio, ...props }: ImageProps & BoxProps) => (
  <Box asChild {...props}>
    <AspectRatio ratio={ratio ?? num('16') / num('10')} {...props}>
      <img alt={alt} src={src} {...stylez.className(styles.img)} />
    </AspectRatio>
  </Box>
);
