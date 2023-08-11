import Container from '@/components/container';
import CRON from '@/constants/cron';
import { CronProvider } from '@/context/cron';
import SEO from '@/lib/seo';
import BlogHeader from '../blog/components/blog-header';
import Main from './components/main';
// import cron from 'node-cron';

export const { metadata } = new SEO({
  title: CRON.seo.title,
  description: CRON.seo.description,
  openGraph: CRON.seo.openGraph,
  imagesUrl: CRON.seo.imagesUrl,
  imagesAlt: CRON.seo.imagesAlt,
});

interface CronPageProps {}

const CronPage = (props: CronPageProps) => {
  //   cron.schedule('*/15 * * * *', () => {
  //     console.log('hey');
  //   });

  return (
    <Container>
      <BlogHeader
        title={'CRON001'}
        sumary={
          'Here you can set your timer and get an email notification once your timer has completed!'
        }
      />
      <CronProvider>
        <Main />
      </CronProvider>
    </Container>
  );
};

export default CronPage;
