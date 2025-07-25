import { generateMetadata } from '@repo/content/imasking/home';
import { getTranslations } from '@repo/content/imasking/locales';
import type { LocalesParams } from '@repo/content/utils/locales';
import { Box } from '@repo/ui/components/box';

export { generateMetadata };

const HomePage = async ({ params }: LocalesParams) => {
  const { lng } = await params;
  const t = await getTranslations(lng);
  //   const { home } = await loadTranslations(lng);

  return <Box>{t('home.summary')}</Box>;
};

export default HomePage;
