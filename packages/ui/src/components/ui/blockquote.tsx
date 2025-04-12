import {
  Blockquote as B,
  type BlockquoteProps as Props,
  Separator,
} from '@radix-ui/themes';

export interface BlockquoteProps extends Props {
  separator?: boolean;
}

export const Blockquote = ({
  content,
  size,
  children,
  separator,
  ...props
}: BlockquoteProps) => (
  <B size={size ?? '3'} {...props}>
    {children ?? content}
    {separator && <Separator mt='2' size='4' />}
  </B>
);
