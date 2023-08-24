import useCollapse from '@/Hooks/useCollapse';
import sitemap from '@/constants/siteMap';
import { Link } from '@radix-ui/themes';

const Nav = () => {
  const { offCollapse } = useCollapse();
  return (
    <ul>
      {sitemap.map((link, id) => (
        <li key={id}>
          <Link target='_self' onClick={offCollapse} href={link.route}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
