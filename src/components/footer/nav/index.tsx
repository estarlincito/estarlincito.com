import Footer from '@/constants/footer';
import sitemap from '@/constants/siteMap';
import { Box } from '@radix-ui/themes';
import Copyright from './copyright';
import List from './list';
import Styled from './nav.module.scss';

const Nav = () => {
  return (
    <Box>
      <Box className={Styled.nav}>
        <List title='Categorias' links={Footer.catsLinks} target='_self' />
        <List
          title='Puedes encontrarme'
          links={Footer.hireme}
          target='_blank'
        />
        <List title='Sitemap' links={sitemap} target='_self' />
      </Box>
      <Copyright />
    </Box>
  );
};

export default Nav;
