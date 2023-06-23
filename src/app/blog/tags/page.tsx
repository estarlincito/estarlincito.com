import Linkdoc from '@/components/UI/linkdoc';
import Title from '@/components/UI/title';
import Post from '@/lib/post';
import SEO from '@/lib/seo';
import clsx from 'clsx';

export const { metadata } = new SEO({
  title: 'Estarlincito | Tags',
  description:
    'Desarrollo de tecnologías como HTML, CSS, JS, React, diseño atómico para mejorar la experiencia de usuario y más.',
  openGraph: { type: 'website', url: 'https://estarlincito.com/tags' },
  imagesUrl:
    'https://images.unsplash.com/photo-1546074177-ffdda98d214f?ixlib=rb-4.0.3&const ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
  imagesAlt: 'imagen de palabras',
});

const TagsPage = () => {
  const { allTags } = Post;

  return (
    <div
      className={clsx(
        'min-h-[80vh]',
        'flex flex-col items-center gap-10',
        'md:flex-row md:justify-center'
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
        {allTags.map(({ tag, count }, id) => (
          <li key={id}>
            <Linkdoc
              href={`/blog/tags/${tag}`}
              target='_self'
              font='font-normal'
              color='sky'
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
