import { Box, Card as RadixCard, Strong, Text } from '@repo/ui';

interface Props {
  label: string;
  summary: string;
  date: string;
  company: string;
}

const Card = ({ label, summary, date, company }: Props) => (
  <RadixCard size='2' variant='ghost'>
    <Text size='3'>
      <Strong>{label}</Strong>
    </Text>
    <Box asChild>
      <Text>
        <Strong>Company:</Strong> {company}
      </Text>
    </Box>
    <Box asChild>
      <Text>
        <Strong>Date:</Strong>
        {date}
      </Text>
    </Box>

    <Box asChild>
      <Text>{summary}</Text>
    </Box>
  </RadixCard>
);

export default Card;
