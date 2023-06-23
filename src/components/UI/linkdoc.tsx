import Target from '@/types/target';
import { clsx } from 'clsx';
import Link from 'next/link';
import { MouseEventHandler, ReactNode } from 'react';

interface LinkdocProps {
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

const Linkdoc = (props: LinkdocProps) => {
  return (
    <Link href={props.href}>
      <a
        onClick={props.onClick}
        target={props.target}
        className={clsx(
          'hover:text-sky-800 active:text-sky-900',
          'dark:hover:text-sky-600 dark:active:text-sky-700',
          props.font === undefined && 'font-bold',
          props.font && props.font,
          props.size === undefined && 'text-sm',
          props.size && props.size,
          props.color === 'sky' ? 'text-sky-600 dark:text-sky-400' : '',
          props.color === 'neutral'
            ? 'text-neutral-600 dark:text-neutral-300'
            : '',
          props.orden === 'horizontally'
            ? 'flex flex-row items-center gap-x-[1px]'
            : '',
          props.orden === 'vertically' ? 'flex items-center gap-1' : '',
          props.underline === true ? 'underline' : ''
        )}
      >
        {props.children}
      </a>
    </Link>
  );
};

export default Linkdoc;
