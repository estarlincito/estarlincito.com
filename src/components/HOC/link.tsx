import { Target } from '@/types';
import { clsx } from 'clsx';
import Link from 'next/link';
import { MouseEventHandler, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href: string;
  target: Target;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  styled?: 'none';
  className?: string;
  font?: 'font-sans' | 'font-light ' | 'font-serif ' | 'font-normal';
}
const _Link: React.FC<Props> = ({
  href,
  target,
  children,
  className,
  font,
  onClick,
}) => {
  return (
    <Link href={href}>
      <a
        onClick={onClick}
        target={target}
        className={clsx(
          font === undefined && 'font-bold',
          'hover:text-sky-800 active:text-sky-900',
          'dark:hover:text-sky-600 dark:active:text-sky-700',
          className && className
        )}
      >
        {children}
      </a>
    </Link>
  );
};

export default _Link;
