import Box from './box';
import Container from './container';

const LoadingArticle = () => {
  return (
    <Container className='grid gap-5 justify-center grid-cols-[repeat(auto-fill,350px)]'>
      {[...Array(5).keys()].map((i) => (
        <Box key={i} className='w-[350px] h-80' />
      ))}
    </Container>
  );
};

export default LoadingArticle;
