import { Card as Cardr, Text } from '@radix-ui/themes';

interface CardProps {
  principio: string;
  razon: string;
}

const Card = ({ principio, razon }: CardProps) => {
  return (
    <Cardr variant='surface' className='cursor-default'>
      <Text as='div' size='2' weight='bold'>
        {principio}
      </Text>
      <Text mt='1' as='div' color='gray' size='2'>
        {razon}
      </Text>
    </Cardr>
  );
};

export default Card;
