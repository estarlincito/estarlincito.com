import { MouseEventHandler, ReactNode } from 'react';
import { Target } from '@/types';
import Link from 'next/link';
import { clsx } from 'clsx';

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
  orden?: 'center';
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
          orden === 'center' ? 'flex flex-row items-center gap-x-[1px]' : '',
          underline === true ? 'underline' : ''
        )}
      >
        {children}
      </a>
    </Link>
  );
};

export default Linkdoc;
