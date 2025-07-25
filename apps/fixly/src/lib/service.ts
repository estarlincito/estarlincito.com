import {
  enServices,
  esServices,
  type Services,
} from '@repo/content/.mdxlayer/fixly/generated';
import type { Locale } from '@repo/content/utils/locales';

type Variants = 'category' | 'service' | 'not-fount';

interface Service {
  variant: Variants;
  services: Services[];
}

export const allServices = {
  en: enServices,
  es: esServices,
};

export const getService = (slug: string, lgn: Locale): Service => {
  const _slug = decodeURIComponent(slug);
  let variant: Variants = 'not-fount';

  const data = allServices[lgn].filter((items) => {
    const isService = items.slugs.service === _slug;
    const isCategory = items.slugs.category === _slug;

    if (isService) {
      variant = 'service';
      return isService;
    }

    if (isCategory) {
      variant = 'category';
      return isCategory;
    }
    return false;
  });

  return {
    services: data,
    variant,
  };
};
