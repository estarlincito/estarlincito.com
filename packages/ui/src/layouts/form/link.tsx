import { Link as Link_, Strong } from '@radix-ui/themes';

interface Props {
  route: string;
  label: string;
}

const Link = ({ label, route }: Props) => {
  return (
    <Link_ color='gray' href={route} size='2'>
      <Strong>{label}</Strong>
    </Link_>
  );
};

export default Link;
