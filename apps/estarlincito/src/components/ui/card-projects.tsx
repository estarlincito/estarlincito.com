/* eslint-disable @next/next/no-img-element */
import { Box, Card, Inset, Link, Strong, Text } from '@repo/ui';
import stylez from '@stylezjs/stylez';

const styles = stylez.create({
  backgroundColor: 'var(--gray-5)',
  borderRadius: '5px',
  display: 'block',
  height: '140px',
  objectFit: 'cover',
  width: '100%',
});

interface Props {
  label: string;
  summary: string;
}

const CardProjects = ({ label, summary }: Props) => (
  <Link
    color='gray'
    href={`https://${label.toLocaleLowerCase()}.estarlincito.com`}
    target='_blank'
    underline='none'
  >
    <Card size='2'>
      <Inset clip='padding-box' mb='3' py='current' side='y'>
        <img
          alt={`${label} cover`}
          src={`/assets/projects/${label.toLocaleLowerCase()}/cover.png`}
          {...stylez.className(styles)}
        />
      </Inset>
      <Box minHeight='100px'>
        <Text as='p' size='3'>
          <Strong>{label}</Strong> {summary}
        </Text>
      </Box>
    </Card>
  </Link>
);

export default CardProjects;
