import type { Locale } from '@repo/content/utils/locales';

import { allServices } from './service';

export const toTopics = (lang: Locale) => {
  const seen = new Set();

  return allServices[lang]
    .filter(({ category }) => (seen.has(category) ? false : seen.add(category)))
    .map(({ category, slugs }) => ({
      label: category,
      route: `services/${slugs.category}`,
    }));
};
