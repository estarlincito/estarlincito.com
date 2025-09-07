import '@repo/ui/themes/default.css';

import { siteName } from '@repo/content/accounts/settings';
import { generateStaticParams } from '@repo/content/shared/locales';
import { Layout } from '@repo/ui/layouts/layout';
import { Main } from '@repo/ui/layouts/main';
import { View } from '@repo/ui/layouts/view';
import { pickLng } from '@repo/utils/lng';

import Navbar from '@/features/layout/components/navbar';

export { generateStaticParams };

const RootLayout = async ({ children, params }: LayoutProps<'/[lng]'>) => {
  const lng = await pickLng(params);

  return (
    <Layout lng={lng}>
      <View variant='child-2'>
        <Navbar lng={lng} siteName={siteName} />
        <Main>{children}</Main>
      </View>
    </Layout>
  );
};

export default RootLayout;
