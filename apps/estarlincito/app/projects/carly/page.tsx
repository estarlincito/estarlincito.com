import {
  ABOUT_DESCRIPTION,
  METADATA,
  SECTIONS,
} from '@app/carly/constants/about';
import { siteName, url } from '@app/carly/settings';
import { Project } from '@app/estarlincito/components/layout/project';
import { GenerateMetadata } from '@estarlincito/utils';

export const metadata = GenerateMetadata.website(METADATA);
const CarlyPage = () => (
  <Project
    cta={{ label: `Let’s Go with ${siteName}`, route: url }}
    summary={ABOUT_DESCRIPTION}
    title={siteName}
    topics={SECTIONS.topics}
  />
);

export default CarlyPage;
