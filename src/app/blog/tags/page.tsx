import { Title, Linkdoc } from '@/components/HOC';
import { descriptions, getTagsPosts, SEO } from '@/lib';
import clsx from 'clsx';

//SEO
export const { metadata } = new SEO({
  title: 'Estarlincito | Tags',
  description: descriptions('tags'),
  openGraph: { type: 'website', url: 'https://estarlincito.com/tags' },
  imagesUrl:
    'https://images.unsplash.com/photo-1546074177-ffdda98d214f?ixlib=rb-4.0.3&const ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
  imagesAlt: 'imagen de palabras',
});

const TagsPage = () => {
  const tags = getTagsPosts();
  return (
    <div
      className={clsx(
        'min-h-[80vh]',
        'md:flex md:items-center md:justify-center md:gap-x-5'
      )}
    >
      <Title
        text='Tags'
        size='text-4xl'
        className={clsx(
          'md:pr-3',
          'md:border-r-2 dark:border-neutral-700 border-neutral-400'
        )}
      />

      <ul className='grid md:grid-cols-3 gap-2'>
        {tags.map(({ tag, count }, id) => (
          <li key={id} className=''>
            <Linkdoc
              href={`/blog/tags/${tag}`}
              target='_self'
              font='font-normal'
              className={clsx('text-sky-600', 'dark:text-sky-400')}
            >
              {tag}&nbsp;
              <span className='font-light text-sm text-neutral-700 dark:text-neutral-300'>
                ({count})
              </span>
            </Linkdoc>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagsPage;
