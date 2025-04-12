import { estarlincito } from '@repo/constants';
import { Link, Strong } from '@repo/ui';
const { siteMap } = estarlincito;

const Nav = () => (
  <ul>
    {siteMap.map((link) => (
      <li key={link.key}>
        <Link
          href={link.route}
          target={link.route.includes('http') ? '_blank' : '_self'}
        >
          <Strong>{link.label}</Strong>
        </Link>
      </li>
    ))}
  </ul>
);

export default Nav;
