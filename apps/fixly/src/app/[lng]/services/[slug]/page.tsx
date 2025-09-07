import { categoryMetadata } from '@repo/content/fixly/services/cat';
import {
  generateStaticParams,
  serviceMetadata,
} from '@repo/content/fixly/services/service';
import { checkService } from '@repo/content/fixly/utils/service';
import CatchAll from '@repo/ui/pages/catch-all';

import Category from './pages/category';
import Service from './pages/service';

const generateMetadata = async ({
  params,
}: PageProps<'/[lng]/services/[slug]'>) => {
  const { slug } = await params;
  const check = checkService(slug);
  if (!check) return CatchAll({ params });
  if (check === 'category') return categoryMetadata(params);
  return serviceMetadata(params);
};

const RenderPage = async ({ params }: PageProps<'/[lng]/services/[slug]'>) => {
  const { slug } = await params;
  const check = checkService(slug);
  if (!check) return CatchAll({ params });
  if (check === 'category') return Category({ params });
  return Service({ params });
};

export { RenderPage as default, generateMetadata, generateStaticParams };
