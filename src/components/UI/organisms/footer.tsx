import { Linkdoc } from '@/components/HOC';
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

const List: React.FC<Props> = ({ title, links, target, className }) => {
  return (
    <div className={className}>
      <h3 className='text-lg font-bold'>{title}</h3>
      <ul className='m-3 text-sm'>
        {links.map(({ route, label }, id) => (
          <li key={id}>
            <Linkdoc href={route} target={target} font='font-normal'>
              {label}
            </Linkdoc>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Copyright = () => {
  const date = new Date();
  const currentgeYear = date.getFullYear();
  const buildYear = 2023;
  const ownYears = `${buildYear}-${currentgeYear}`;

  return (
    <p className='text-sm mt-5'>
      &nbsp; Copyright © {buildYear === currentgeYear ? buildYear : ownYears}
      &nbsp;
      <Linkdoc href='/' target='_self'>
        Estarlincito
      </Linkdoc>
    </p>
  );
};

const Footer = () => {
  return (
    <footer
      className={clsx(
        'p-5 md:p-16',
        'border-t-[1px] border-gray-300 dark:border-gray-800',
        'bg-gray-50 dark:bg-inherit'
      )}
    >
      <div className='max-w-7xl mx-auto'>
        <div className='grid sm:grid-flow-col sm:justify-center gap-8'>
          <List title='Categorias' links={category} target='_self' />
          <List title='Puedes encontrarme' links={hireme} target='_blank' />
          <List title='Sitemap' links={sitemap} target='_self' />
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
