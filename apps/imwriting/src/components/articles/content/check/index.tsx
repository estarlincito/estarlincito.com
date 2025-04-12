import * as Icons from '@radix-ui/react-icons';
import { Flex } from '@repo/ui';

import Inf from './inf';

interface Props {
  check: boolean;
  readingTime: string;
}

const Check = ({ check, readingTime }: Props) => (
  <Flex direction='row' gap='4'>
    {!check ? (
      <Inf color='red' label='Under review'>
        <Icons.EyeOpenIcon />
      </Inf>
    ) : (
      <Inf color='blue' label='Verified'>
        <Icons.CheckCircledIcon />
      </Inf>
    )}

    <Inf label={readingTime}>
      <Icons.ClockIcon />
    </Inf>
  </Flex>
);

export default Check;
