import { Box, Card as RadixCard, Inset, Strong, Text } from '@repo/ui';
import { type IconType } from 'react-icons';

interface Props {
  label: string;
  summary: string;
  Icon: IconType;
  color: string;
}

const Card = ({ label, summary, Icon, color }: Props) => (
  <RadixCard size='2'>
    <Inset clip='padding-box' mb='3' py='current' side='y'>
      <Icon color={color} size='80px' />
    </Inset>

    <Text size='3'>
      <Strong>{label}</Strong>
    </Text>

    <Box asChild mt='3'>
      <Text>{summary}</Text>
    </Box>
  </RadixCard>
);

export default Card;
