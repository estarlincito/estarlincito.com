import { Project } from '@app/estarlincito/components/layout/project';
import {
  ABOUT_DESCRIPTION,
  METADATA,
  SECTIONS,
} from '@app/portfolio/constants/about';
import { siteName, url } from '@app/portfolio/settings';
import { GenerateMetadata } from '@estarlincito/utils';

export const metadata = GenerateMetadata.website(METADATA);
const PortfolioPage = () => (
  <Project
    cta={{ label: `Create with ${siteName}`, route: url }}
    summary={ABOUT_DESCRIPTION}
    title={siteName}
    topics={SECTIONS.topics}
  />
);

export default PortfolioPage;
