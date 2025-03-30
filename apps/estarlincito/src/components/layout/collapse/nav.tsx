import { Link, Strong } from '@radix-ui/themes';
import { estarlincito } from '@repo/constants';
const { siteMap } = estarlincito;

const Nav = () => {
  return (
    <ul>
      {siteMap.map((link, id) => (
        <li key={id}>
          <Link
            target={link.route.includes('http') ? '_blank' : '_self'}
            href={link.route}
          >
            <Strong>{link.label}</Strong>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
