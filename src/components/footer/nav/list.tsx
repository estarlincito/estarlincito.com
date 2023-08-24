import Links from '@/types/links';
import Target from '@/types/target';
import { Box, Heading, Link } from '@radix-ui/themes';

interface ListProps {
  title: string;
  links: Links[];
  target: Target;
  className?: string;
}

const List = (props: ListProps) => {
  const { title, links, target, className } = props;

  return (
    <Box className={className}>
      <Heading size='4'>{title}</Heading>
      <ul>
        {links.map(({ route, label }, id) => (
          <li key={id}>
            <Link href={route} target={target} color='gray' weight='bold'>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default List;
