import '@/styles/globals.css';
import '@repo/ui/globals.css';

import { siteName } from '@repo/content/accounts/settings';
import { generateStaticParams } from '@repo/content/utils/locales';
import type { LayoutProps } from '@repo/types/layout';
import { Layout } from '@repo/ui/layouts/layout';
import { Main } from '@repo/ui/layouts/main';
import { View } from '@repo/ui/layouts/view';

import Navbar from '@/features/layout/components/navbar';

export { generateStaticParams };

const RootLayout = async ({ children, params }: LayoutProps) => {
  const { lng } = await params;

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
