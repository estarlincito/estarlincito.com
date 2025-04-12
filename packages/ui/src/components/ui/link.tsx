import { Link as L, type LinkProps } from '@radix-ui/themes';

export const Link = ({ children, content, title, ...props }: LinkProps) => {
  const { href } = props;

  if (!href) return <L {...props}>{children ?? content ?? title}</L>;

  const isExternal = href.startsWith('http');

  return isExternal ? (
    <L href={href} rel='noopener noreferrer' target='_blank' {...props}>
      {children ?? content ?? title}
    </L>
  ) : (
    <L href={href} {...props}>
      {children ?? content ?? title}
    </L>
  );
};
