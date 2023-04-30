import { category } from './category';
import Copyright from './copyright';
import { hireme } from './hireme';
import { sitemap } from '@/lib';
import List from './list';

const Nav = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='grid sm:grid-flow-col sm:justify-center gap-8'>
        <List title='Categorias' links={category} target='_self' />
        <List title='Puedes encontrarme' links={hireme} target='_blank' />
        <List title='Sitemap' links={sitemap} target='_self' />
      </div>
      <Copyright />
    </div>
  );
};

export default Nav;
