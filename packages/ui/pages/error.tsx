'use client';
import type { Translations } from '@repo/content/estarlincito/locales';
import { Button } from '@repo/ui/components/button';
import { Heading } from '@repo/ui/components/heading';
import { Link } from '@repo/ui/components/link';
import { Text } from '@repo/ui/components/text';
import { useTranslation } from '@repo/ui/hooks/useTranslation';
import { Flex } from '@repo/ui/layouts/flex';

export type ErrorProps = Translations['error'] & {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  const {
    translations: { body, contact, heading, tryAgain },
  } = useTranslation<Translations['error']>();

  return (
    <Flex className='justify-center items-center'>
      <Flex className='max-w-80 flex-col gap-y-2'>
        <Heading content={heading} />
        <Heading as='h4' content={error.message} />

        <Text>{body}</Text>

        <Flex className='justify-between w-36 gap-x-2 mt-3'>
          <Button label={tryAgain} onClick={reset} />

          <Button asChild variant='secondary'>
            <Link className='cursor-default' label={contact} route='/contact' />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Error;
