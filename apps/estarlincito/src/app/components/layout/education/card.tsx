import { Box, Card as RadixCard, Strong, Text } from '@radix-ui/themes';

interface Props {
  label: string;
  summary: string;
}

const Card = ({ label, summary }: Props) => {
  return (
    <RadixCard size='2' variant='ghost'>
      <Text size='3'>
        <Strong>{label}</Strong>
      </Text>

      <Box asChild>
        <Text>{summary}</Text>
      </Box>
    </RadixCard>
  );
};

export default Card;
