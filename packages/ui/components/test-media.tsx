import { cn } from '@repo/ui/lib/utils';

const variants = [
  {
    className: cn(
      'text-white m-3 rounded-2xl p-3 dark:text-black',
      'bg-amber-200',
      'max-w-[30rem]',
    ),
    title: 'Initial',
  },
  {
    className: cn(
      'hidden text-white m-3 rounded-2xl p-3 dark:text-black',
      'bg-amber-400',
      'max-w-[40rem]',
      'sm:block',
    ),
    title: 'sm',
  },

  {
    className: cn(
      'hidden text-white m-3 rounded-2xl p-3 dark:text-black',
      'bg-amber-300',
      'max-w-[48rem]',
      'md:block',
    ),
    title: 'md',
  },

  {
    className: cn(
      'hidden text-white m-3 rounded-2xl p-3 dark:text-black',
      'bg-amber-500',
      'max-w-[64rem]',
      'lg:block',
    ),
    title: 'lg',
  },

  {
    className: cn(
      'hidden text-white m-3 rounded-2xl p-3 dark:text-black',
      'bg-amber-600',
      'max-w-[80rem]',
      'xl:block',
    ),
    title: 'xl',
  },
  {
    className: cn(
      'hidden text-white m-3 rounded-2xl p-3 dark:text-black',
      'bg-amber-700',
      'max-w-[96rem]',
      '2xl:block',
    ),
    title: '2xl',
  },
];

export const TestMedia = () => (
  <div>
    {variants.map(({ className, title }) => (
      <div className={className} key={title}>
        {title}
      </div>
    ))}
  </div>
);
