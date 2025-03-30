import { Box, Card as RadixCard, Inset, Strong, Text } from '@radix-ui/themes';
import { type IconType } from 'react-icons';

interface Props {
  label: string;
  summary: string;
  Icon: IconType;
  color: string;
}

const Card = ({ label, summary, Icon, color }: Props) => {
  return (
    <RadixCard size='2'>
      <Inset clip='padding-box' side='y' py='current' mb='3'>
        <Icon size='80px' color={color} />
      </Inset>

      <Text size='3'>
        <Strong>{label}</Strong>
      </Text>

      <Box mt='3' asChild>
        <Text>{summary}</Text>
      </Box>
    </RadixCard>
  );
};

export default Card;
