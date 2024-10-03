import * as Icons from '@radix-ui/react-icons';
import { Flex, Text } from '@radix-ui/themes';

interface InfProps {
  color: 'sky' | 'gray';
  label: string;
  children: React.ReactNode;
}

const Inf = ({ color, label, children }: InfProps) => {
  return (
    <Flex align='center' gap='1'>
      <Text as='span' color={color}>
        {children}
      </Text>
      <Text as='span'>{label}</Text>
    </Flex>
  );
};

interface CheckProps {
  check: boolean;
  readingTime: string;
}

const Check = (props: CheckProps) => {
  return (
    <Flex direction='row' gap='4'>
      {props.check === false ? (
        <Inf label='Under review' color='sky'>
          <Icons.EyeOpenIcon />
        </Inf>
      ) : (
        <Inf label='Verified' color='sky'>
          <Icons.CheckCircledIcon />
        </Inf>
      )}

      <Inf label={props.readingTime} color='gray'>
        <Icons.ClockIcon />
      </Inf>
    </Flex>
  );
};

export default Check;
