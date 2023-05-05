import { Target } from '@/types';
import { clsx } from 'clsx';
import Link from 'next/link';
import { MouseEventHandler, ReactNode } from 'react';

//Types
interface Props {
  children: ReactNode;
  href: string;
  target: Target;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  font?: 'font-light' | 'font-normal';
  underline?: boolean;
  color?: 'sky' | 'neutral';
  size?: 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl';
  orden?: 'horizontally' | 'vertically';
}

const Linkdoc: React.FC<Props> = ({
  href,
  target,
  children,
  font,
  color,
  size,
  orden,
  underline,
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
          color === 'sky' ? 'text-sky-600 dark:text-sky-400' : '',
          color === 'neutral' ? 'text-neutral-600 dark:text-neutral-300' : '',
          orden === 'horizontally'
            ? 'flex flex-row items-center gap-x-[1px]'
            : '',
          orden === 'vertically' ? 'flex items-center gap-1' : '',
          underline === true ? 'underline' : ''
        )}
      >
        {children}
      </a>
    </Link>
  );
};

export default Linkdoc;
