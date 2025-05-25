import { Project } from '@app/estarlincito/components/layout/project';
import {
  ABOUT_DESCRIPTION,
  METADATA,
  SECTIONS,
} from '@app/imwriting/constants/about';
import { siteName, url } from '@app/imwriting/settings';
import { GenerateMetadata } from '@estarlincito/utils';

export const metadata = GenerateMetadata.website(METADATA);
const ImwritingPage = () => (
  <Project
    cta={{ label: `Explore Freely with ${siteName}`, route: url }}
    summary={ABOUT_DESCRIPTION}
    title={siteName}
    topics={SECTIONS.topics}
  />
);

export default ImwritingPage;
