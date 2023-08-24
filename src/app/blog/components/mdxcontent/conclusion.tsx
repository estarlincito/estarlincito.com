import { Heading } from '@radix-ui/themes';

const Conclusion = (props: any) => {
  return (
    <>
      <Heading as='h2' weight='bold' mt='9'>
        Conclusión:
      </Heading>
      {props.children}
    </>
  );
};

export default Conclusion;
