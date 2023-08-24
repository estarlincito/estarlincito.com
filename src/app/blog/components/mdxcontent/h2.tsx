import { Heading } from '@radix-ui/themes';

const H2 = (props: any) => {
  return (
    <Heading as='h2' weight='bold'>
      {props.children}
    </Heading>
  );
};

export default H2;
