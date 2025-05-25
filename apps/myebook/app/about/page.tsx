import { ABOUT_TITLE, METADATA, SECTIONS } from '@app/myebook/constants/about';
import { GenerateMetadata } from '@estarlincito/utils';
import { About } from '@repo/ui/pages/about';
export const metadata = GenerateMetadata.website(METADATA);
const AboutPage = () => <About sections={SECTIONS} title={ABOUT_TITLE} />;
export default AboutPage;
