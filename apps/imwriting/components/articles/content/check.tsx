import * as Icons from '@radix-ui/react-icons';
import { Text } from '@repo/ui/components/text';
import { Flex } from '@repo/ui/layouts/flex';
import { cn } from '@repo/ui/lib/utils';
import type { ReactNode } from 'react';

interface CheckContentProps {
  className?: string;
  label: string;
  children: ReactNode;
}

const CheckContent = ({ className, label, children }: CheckContentProps) => (
  <Flex className='items-center flex-row gap-1 justify-center'>
    <Text asChild className={cn(className)}>
      {children}
    </Text>
    <Text as='span'>{label}</Text>
  </Flex>
);

interface CheckProps {
  check: boolean;
  readingTime: string;
}

export const Check = ({ check, readingTime }: CheckProps) => (
  <Flex className='flex-row gap-4 my-5'>
    {!check ? (
      <CheckContent className='text-red-500' label='Under review'>
        <Icons.EyeOpenIcon />
      </CheckContent>
    ) : (
      <CheckContent className='text-blue-500' label='Verified'>
        <Icons.CheckCircledIcon />
      </CheckContent>
    )}

    <CheckContent label={readingTime}>
      <Icons.ClockIcon />
    </CheckContent>
  </Flex>
);
