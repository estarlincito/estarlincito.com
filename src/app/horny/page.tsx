import Container from '@/components/container';
import Image from 'next/image';
import BlogHeader from '../blog/components/blog-header';
import horny from './30B48E55-AF47-4DA3-94B2-ABD79DD400DB.jpeg';

export const metadata = {
  title: 'Horny',
  description:
    'Loved you yesterday, love you still, always have, always will.” – Elaine Davis -',
};

const Horny = () => {
  return (
    <Container>
      <BlogHeader
        title={'Horny'}
        sumary={
          'Loved you yesterday, love you still, always have, always will.” – Elaine Davis -'
        }
      />

      <div className='mt-6'>
        <figure>
          <Image src={horny} alt='horny' width={2160} height={720} priority />
        </figure>
      </div>
    </Container>
  );
};

export default Horny;
