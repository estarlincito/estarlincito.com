import { Button } from '@/components/ui/button.jsx';
import {
  Flex,
  IconButton,
  Link,
  Strong,
  SubTitle,
  Title,
} from '@/components/ui/index.js';
import { Text } from '@/components/ui/text.jsx';
import { Wrapper } from '@/layouts/index.js';

interface Props {
  error: Error;
  reset: () => void;
}

export const ErrorPage = ({ error, reset }: Props) => (
  <Wrapper align='center' size='1'>
    <Flex direction='column' gap='2'>
      <Title content='Oops!' mb='2' />

      <SubTitle content={error.message} />

      <Text
        content='Please try again or if the problem persists, feel free to contact
          support for assistance. We apologize for the inconvenience.'
      />

      <Flex justify='between' mt='2' width='9.375rem'>
        <Button size='3' variant='ghost' onClick={reset}>
          <Strong>Try again</Strong>
        </Button>

        <Link href='/contact' target='_self' weight='bold'>
          <IconButton variant='ghost'>
            {/* <Strong> */}
            Contact
            {/* </Strong> */}
          </IconButton>
        </Link>
      </Flex>
    </Flex>
  </Wrapper>
);
