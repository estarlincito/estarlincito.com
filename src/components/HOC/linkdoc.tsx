import { _Anchor } from '@/types';
import { clsx } from 'clsx';
import Link from 'next/link';

const Linkdoc: React.FC<_Anchor> = ({
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
