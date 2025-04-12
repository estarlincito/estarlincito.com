import { Text as T, type TextProps } from '@radix-ui/themes';

export const Text = ({ content, size, children, ...props }: TextProps) => (
  <T as='p' size={size ?? '3'} {...props}>
    {children ?? content}
  </T>
);
