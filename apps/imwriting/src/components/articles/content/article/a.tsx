import { handleError } from '@estarlincito/utils';
import { Link } from '@radix-ui/themes';
import React, {
  type AnchorHTMLAttributes,
  type DetailedHTMLProps,
} from 'react';

type Props = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const A = ({ children, href }: Props) => {
  const target = href && href.startsWith('/');

  if (href && href.includes('http://')) {
    handleError("You have 'http://' please change to 'https://'");
  }

  return (
    <Link href={href && href} target={target ? '_self' : '_blank'}>
      {children}
    </Link>
  );
};

export default A;
