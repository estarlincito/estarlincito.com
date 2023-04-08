import { Hr, _Link } from '@/components/HOC';
import { Target } from '@/types';
import { sitemap } from '@/utils';
import clsx from 'clsx';
import { allBlogs } from 'contentlayer/generated';

type _links = { route: string; label: string }[];
interface Props {
  title: string;
  links: _links;
  target: Target;
  className?: string;
}

//Blog Category links
const categorySet = new Set(allBlogs.map(({ category }) => category));
const _category = Array.from(categorySet);
const category: _links = _category.map((category) => {
  return { route: `/blog/${category.toLowerCase()}`, label: category };
});

//Hireme links
const hireme: _links = [
  { route: 'https://linktr.ee/estarlincito', label: 'Linktr' },
  { route: 'https://twitter.com/estarlincito', label: 'Twitter' },
  { route: 'https://github.com/estarlincito', label: 'GitHub' },
  { route: 'https://www.linkedin.com/in/estarlincito', label: 'Linkedin' },
];

const Section: React.FC<Props> = ({ title, links, target, className }) => {
  return (
    <section className={className}>
      <h3 className='text-lg font-bold'>{title}</h3>
      <Hr className='mb-3' />
      <ul>
        {links.map(({ route, label }, id) => (
          <li key={id}>
            <_Link href={route} target={target}>
              {label}
            </_Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

const Footer = () => {
  return (
    <footer
      className={clsx(
        'bg-gray-50 dark:bg-gray-900',
        'grid py-16 px-5 gap-y-8 content-center',
        'md:gap-x-8 md:justify-center md:grid-cols-[repeat(3,250px)]'
      )}
    >
      <Section
        className='my-0 md:my-0, md:mx-0'
        title='Categorias'
        links={category}
        target='_self'
      />
      <Section
        className='my-0 md:my-0, md:mx-0'
        title='Puedes encontrarme'
        links={hireme}
        target='_blank'
      />
      <Section
        className='my-0 md:my-0, md:mx-0'
        title='Sitemap'
        links={sitemap}
        target='_self'
      />
    </footer>
  );
};

export default Footer;
