/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { enServices } from '@repo/content/.mdxlayer/fixly/generated';
import type { Locale } from '@repo/content/utils/locales';
import type { SearchParamsProps } from '@repo/types';
import CatchAll from '@repo/ui/pages/catch-all';

import { getService } from '@/lib/service';

import Category from './pages/category';
import Service from './pages/service';

interface RenderProps extends SearchParamsProps {
  params: Promise<{
    slug: string;
    lng: Locale;
  }>;
}

export const generateStaticParams = () => {
  const slugs = enServices.flatMap((service) => [
    { slug: service.slugs.service },
    { slug: service.slugs.category },
  ]);

  return slugs;
};

export const generateMetadata = async ({ params }: RenderProps) => {
  const { lng, slug } = await params;
  const { services, variant } = getService(slug, lng);

  if (variant === 'category') {
    return services[0]?.meta.category;
  }

  if (variant === 'service') {
    return services[0]?.meta.service;
  }

  return {};
};

const RenderPage = async ({ params, searchParams }: RenderProps) => {
  const { lng, slug } = await params;
  const search = await searchParams;
  const { services, variant } = getService(slug, lng);

  if (variant === 'category') {
    return <Category search={search} services={services} />;
  }

  if (variant === 'service') {
    return <Service {...services[0]!} />;
  }

  return CatchAll;
};

export default RenderPage;
