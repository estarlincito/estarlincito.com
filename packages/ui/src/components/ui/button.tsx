import { Button as B, type ButtonProps } from '@radix-ui/themes';

export const Button = ({
  content,
  variant,
  children,
  ...props
}: ButtonProps) => (
  <B {...props} variant={variant ?? 'solid'}>
    {children ?? content}
  </B>
);
