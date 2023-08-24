import { Link, Text } from '@radix-ui/themes';

const Copyright = () => {
  const date = new Date();
  const currentgeYear = date.getFullYear();
  const buildYear = 2023;
  const ownYears = `${buildYear}-${currentgeYear}`;

  return (
    <Text as='p' size='3' mt='5'>
      &nbsp; Copyright © {buildYear === currentgeYear ? buildYear : ownYears}
      &nbsp;
      <Link color='gray' weight='bold' href='/' target='_self'>
        Estarlincito
      </Link>
    </Text>
  );
};

export default Copyright;
