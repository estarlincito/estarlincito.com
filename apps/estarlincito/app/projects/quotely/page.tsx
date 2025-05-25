import { Project } from '@app/estarlincito/components/layout/project';
import {
  ABOUT_DESCRIPTION,
  METADATA,
  SECTIONS,
} from '@app/quotely/constants/about';
import { siteName, url } from '@app/quotely/settings';
import { GenerateMetadata } from '@estarlincito/utils';

export const metadata = GenerateMetadata.website(METADATA);
const QuotelyPage = () => (
  <Project
    cta={{ label: `Dream On with ${siteName}`, route: url }}
    summary={ABOUT_DESCRIPTION}
    title={siteName}
    topics={SECTIONS.topics}
  />
);

export default QuotelyPage;
