import { Target } from '@/types';
import { clsx } from 'clsx';
import Link from 'next/link';
import { MouseEventHandler, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href: string;
  target: Target;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  font?: 'font-light ' | 'font-normal';
  size?: 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl';
}
const Linkdoc: React.FC<Props> = ({
  href,
  target,
  children,
  className,
  font,
  size,
  onClick,
}) => {
  return (
    <Link href={href}>
      <a
        onClick={onClick}
        target={target}
        className={clsx(
          'hover:text-sky-800 active:text-sky-900',
          'dark:hover:text-sky-600 dark:active:text-sky-700',
          font === undefined && 'font-bold',
          font && font,
          size === undefined && 'text-sm',
          size && size,
          className && className
        )}
      >
        {children}
      </a>
    </Link>
  );
};

export default Linkdoc;
