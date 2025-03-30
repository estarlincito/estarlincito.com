import { Card as RadixCard, Flex, Inset, Strong, Text } from '@radix-ui/themes';
import { type IconType } from 'react-icons';

interface Props {
  label: string;
  Icon: IconType;
  color: string;
}

const Card = ({ label, Icon, color }: Props) => {
  return (
    <RadixCard size='2' variant='classic'>
      <Inset clip='padding-box' side='y' py='current' mb='3'>
        <Flex align='center' justify='center'>
          <Icon size='50px' color={color} />
        </Flex>
      </Inset>

      <Flex align='center' justify='center'>
        <Text size='2' asChild>
          <Strong>{label}</Strong>
        </Text>
      </Flex>
    </RadixCard>
  );
};

export default Card;
