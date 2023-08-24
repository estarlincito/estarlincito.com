import { Card as Cardr, Text } from '@radix-ui/themes';

interface CardProps {
  meta: string;
  motivo: string;
}

const Card = ({ meta, motivo }: CardProps) => {
  return (
    <Cardr variant='classic'>
      <Text as='div' size='2' weight='bold'>
        {meta}
      </Text>
      <Text mt='1' as='div' color='gray' size='2'>
        {motivo}
      </Text>
    </Cardr>
  );
};

export default Card;
