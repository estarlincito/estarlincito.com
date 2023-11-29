import { Card as Cardr, Text } from '@radix-ui/themes';

interface CardProps {
  consejo: string;
  razon: string;
}

const Card = ({ consejo, razon }: CardProps) => {
  return (
    <Cardr variant='classic' className='cursor-default'>
      <Text as='div' size='2' weight='bold'>
        {consejo}
      </Text>
      <Text mt='1' as='div' color='gray' size='2'>
        {razon}
      </Text>
    </Cardr>
  );
};

export default Card;
