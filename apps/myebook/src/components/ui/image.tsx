/* eslint-disable @next/next/no-img-element */
import { num } from '@estarlincito/utils';
import { AspectRatio } from '@repo/ui';
import stylez from '@stylezjs/stylez';

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
const Image = ({ src, alt }: Props) => (
  <AspectRatio ratio={num('16') / num('10')}>
    <img alt={alt} src={src} {...stylez.className(styles.img)} />
  </AspectRatio>
);

export default Image;
