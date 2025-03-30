import { Avatar, Box, Button, Flex, Section, Text } from '@radix-ui/themes';
import { Title } from '@repo/ui';

export const About = () => {
  return (
    <Section>
      <Flex direction='row' align='center' gapX='4'>
        <Avatar
          size='7'
          src='/assets/avatar.jpeg'
          fallback='A'
          radius='small'
        />
        <Title contents='Hello!' />
      </Flex>
      <Box mt='5'>
        <Text as='p' size='5' mt='5'>
          I’m Estarlincito, a Web Designer and IT Support specialist with a
          passion for software development.
        </Text>
        <Text as='p' size='5' mt='3'>
          I create modern, user-friendly websites optimized for all devices.
          With expertise in HTML5, CSS3, JavaScript, and frameworks like React
          and Nextjs, I’ve built successful projects for clients worldwide and
          am always ready for new challenges.
        </Text>
        <Text as='p' size='5' mt='3'>
          For me, technology is more than just a skill—it’s an adventure. Life
          is either a bold journey or nothing at all.
        </Text>
      </Box>
      <Button variant='outline' mt='5' disabled>
        {/* <Link underline='none'> */}
        Download My Portfolio
        {/* </Link> */}
      </Button>
    </Section>
  );
};
