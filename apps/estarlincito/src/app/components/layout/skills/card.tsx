import { Card as C, Flex, Inset, Strong, Text } from '@repo/ui';
import { type IconType } from 'react-icons';

interface Props {
  label: string;
  Icon: IconType;
  color: string;
}

const Card = ({ label, Icon, color }: Props) => (
  <C size='2' variant='classic'>
    <Inset clip='padding-box' mb='3' py='current' side='y'>
      <Flex align='center' justify='center'>
        <Icon color={color} size='50px' />
      </Flex>
    </Inset>

    <Flex align='center' justify='center'>
      <Text asChild size='2'>
        <Strong>{label}</Strong>
      </Text>
    </Flex>
  </C>
);

export default Card;
