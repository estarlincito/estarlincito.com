import { Link, Text } from '@radix-ui/themes';

const Brand = () => {
  return (
    <Link href='/' target='_self'>
      <Text as='span' ml='1' size={{ md: '7' }} weight='bold'>
        Estarlincito
      </Text>
    </Link>
  );
};

export default Brand;
