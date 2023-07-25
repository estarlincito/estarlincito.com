import useCollapse from '@/Hooks/useCollapse';
import sitemap from '@/constants/siteMap';
import Linkdoc from '../UI/linkdoc';

const Nav = () => {
  const { offCollapse } = useCollapse();
  return (
    <ul>
      {sitemap.map((link, id) => (
        <li key={id}>
          <Linkdoc target='_self' onClick={offCollapse} href={link.route}>
            {link.label}
          </Linkdoc>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
