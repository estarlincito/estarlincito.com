import * as Icons from '@radix-ui/react-icons';
import { Flex } from '@radix-ui/themes';
import React from 'react';

import Inf from './inf';

interface Props {
  check: boolean;
  readingTime: string;
}

const Check = ({ check, readingTime }: Props) => {
  return (
    <Flex direction='row' gap='4'>
      {!check ? (
        <Inf label='Under review' color='red'>
          <Icons.EyeOpenIcon />
        </Inf>
      ) : (
        <Inf label='Verified' color='blue'>
          <Icons.CheckCircledIcon />
        </Inf>
      )}

      <Inf label={readingTime}>
        <Icons.ClockIcon />
      </Inf>
    </Flex>
  );
};

export default Check;
