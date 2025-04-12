import { Avatar, Bio, Box, Button, Flex, Section, Title } from '@repo/ui';

export const About = () => (
  <Section>
    <Flex align='center' direction='row' gapX='4'>
      <Avatar fallback='A' radius='small' size='7' src='/assets/avatar.jpeg' />
      <Title content='Hello!' />
    </Flex>
    <Box mt='5'>
      <Bio />
    </Box>
    <Button disabled mt='5' variant='outline'>
      {/* <Link underline='none'> */}
      Download My Portfolio
      {/* </Link> */}
    </Button>
  </Section>
);
