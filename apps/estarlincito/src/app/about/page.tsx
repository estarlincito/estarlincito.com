import { Text } from '@radix-ui/themes';
import { estarlincito } from '@repo/constants';
import { Container, Header, Topics, Wrapper } from '@repo/ui';
const { about } = estarlincito;

export const { metadata } = about;

const Page = () => {
  return (
    <Container size='3'>
      <Wrapper align='start'>
        <Header
          title={about.title}
          summary={about.description}
          slug={[{ route: about.path, title: about.title }]}
        />
        <Text>{about.contents[0]}</Text>
        <Topics topics={about.topics} dash />
      </Wrapper>
    </Container>
  );
};

export default Page;
