/* eslint-disable @next/next/no-img-element */
import { Card as RadixCard, Inset, Link, Strong, Text } from '@radix-ui/themes';
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

const Card = ({ label, summary }: Props) => {
  return (
    <Link
      href={`https://${label.toLocaleLowerCase()}.estarlincito.com`}
      underline='none'
      color='gray'
      target='_blank'
    >
      <RadixCard size='2'>
        <Inset clip='padding-box' side='y' py='current' mb='3'>
          <img
            src={`/assets/projects/${label.toLocaleLowerCase()}/cover.png`}
            alt={`${label} cover`}
            {...stylez.className(styles)}
          />
        </Inset>
        <Text as='p' size='3'>
          <Strong>{label}</Strong> {summary}
        </Text>
      </RadixCard>
    </Link>
  );
};

export default Card;
