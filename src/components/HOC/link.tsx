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
}
const _Link: React.FC<Props> = ({
  href,
  target,
  children,
  styled,
  className,
  onClick,
}) => {
  return (
    <Link href={href}>
      <a
        onClick={onClick}
        target={target}
        className={clsx(
          styled === undefined &&
            'font-bold hover:text-sky-700 active:text-sky-900 text-sky-600 dark:hover:text-sky-600 dark:active:text-sky-900 dark:text-sky-400',

          className && className
        )}
      >
        {children}
      </a>
    </Link>
  );
};

export default _Link;
