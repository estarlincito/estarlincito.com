import { Container } from '@/components/UI/organisms';
import { getTags } from '@/utils';
import { Hr, Title, _Link } from '@/components/HOC';
import { Metadata } from 'next';

//SEO
export const metadata: Metadata = {
  title: 'Tags | Estarlincito',
  description:
    'Desarrollo de tecnologías como HTML, CSS, JS, React, diseño atómico para mejorar la experiencia de usuario y más',
};

const TagsList = () => {
  const { tags } = getTags();

  return (
    <ul className='md:flex md:flex-wrap'>
      {tags.map(({ tag, count }, id) => (
        <li key={id} className='mb-1 md:mb-0 md:basis-4/12'>
          <_Link href={`/blog/tags/${tag}`} target='_self'>
            {tag}{' '}
            <span className='font-light text-neutral-700 dark:text-neutral-300'>
              ({count})
            </span>
          </_Link>
        </li>
      ))}
    </ul>
  );
};

const TagsPage = () => {
  return (
    <Container>
      <section className='h-[70vh] flex items-center justify-center'>
        <div className='w-80'>
          <Title className='text-3xl'>Tags</Title>
          <Hr className='mt-2 mb-5' />
          <TagsList />
        </div>
      </section>
    </Container>
  );
};

export default TagsPage;
