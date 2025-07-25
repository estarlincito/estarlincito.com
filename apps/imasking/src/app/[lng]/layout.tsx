import '@/styles/globals.css';

import { getMenuLinks } from '@repo/content/imasking/routes';
import { copyright, siteName } from '@repo/content/imasking/settings';
import { generateStaticParams } from '@repo/content/utils/locales';
import { Layout } from '@repo/ui/layouts/layout';
import { Main } from '@repo/ui/layouts/main';
import { Navbar } from '@repo/ui/layouts/navbar';
import { View } from '@repo/ui/layouts/view';

export { generateStaticParams };

import type { LayoutProps } from '@repo/types/layout';
import { Footer } from '@repo/ui/layouts/footer';

const RootLayout = async ({ children, params }: LayoutProps) => {
  const { lng } = await params;
  const menuLinks = await getMenuLinks(lng);

  return (
    <Layout lng={lng}>
      <View variant='child-3'>
        <Navbar menuLinks={menuLinks} siteName={siteName} />
        <Main>{children}</Main>
        <Footer copyright={copyright} />
      </View>
    </Layout>
  );
};

export default RootLayout;
