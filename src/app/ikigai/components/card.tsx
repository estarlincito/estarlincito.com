import { Card as Cardr, Text } from '@radix-ui/themes';

interface CardProps {
  principle: string;
  details: string;
}

const Card = ({ principle, details }: CardProps) => {
  return (
    <Cardr variant='classic' className='cursor-default'>
      <Text as='div' size='2' weight='bold'>
        {principle}
      </Text>
      <Text mt='1' as='div' color='gray' size='2'>
        {details}
      </Text>
    </Cardr>
  );
};

export default Card;
