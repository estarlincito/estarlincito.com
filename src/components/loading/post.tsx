import { Wrapper } from '@UI/organisms';
import Box from './box';
import Container from './container';

const LoadingPost = () => {
  return (
    <Wrapper>
      <Container className='flex flex-col space-y-5'>
        <Box className='h-8 w-5/12' />
        <Box className='h-8 w-8/12' />
        <Box className='h-8 w-3/12' />
        <Box className='h-56 w-full' />
        <Box className='h-32 w-11/12' />
        <div className='h-32 w-5/12'>
          <div className='flex items-center space-x-5'>
            <Box className='h-16 w-16 rounded-full' />
            <Box className='h-5 w-8/12' />
          </div>
          <Box className='h-5 m-3 w-11/12' />
        </div>
        {[...Array(20).keys()].map((i) => (
          <Box key={i} className='h-8 w-full' />
        ))}
      </Container>
    </Wrapper>
  );
};

export default LoadingPost;
