import {
  ABOUT_DESCRIPTION,
  METADATA,
  SECTIONS,
} from '@app/budget/constants/about';
import { siteName, url } from '@app/budget/settings';
import { Project } from '@app/estarlincito/components/layout/project';
import { GenerateMetadata } from '@estarlincito/utils';

export const metadata = GenerateMetadata.website(METADATA);
const BudgetPage = () => (
  <Project
    cta={{ label: `Grow Smart with ${siteName}`, route: url }}
    summary={ABOUT_DESCRIPTION}
    title={siteName}
    topics={SECTIONS.topics}
  />
);

export default BudgetPage;
