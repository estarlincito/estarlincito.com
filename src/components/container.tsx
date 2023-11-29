import { Container as Containerr } from '@radix-ui/themes';
interface ContainerProps {
  children: React.ReactNode;
  size: '1' | '2' | '3' | '4';
}

const Container = (props: ContainerProps) => {
  return (
    <Containerr size={props.size} p='5' mt='9'>
      {props.children}
    </Containerr>
  );
};

export default Container;
