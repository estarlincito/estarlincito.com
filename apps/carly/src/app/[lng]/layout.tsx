import '@repo/ui/themes/rose.css';

import { getMenuLinks } from '@repo/content/carly/routes';
import { copyright, siteName } from '@repo/content/carly/settings';
import { generateStaticParams } from '@repo/content/shared/locales';
import { Footer } from '@repo/ui/layouts/footer';
import { Layout } from '@repo/ui/layouts/layout';
import { Main } from '@repo/ui/layouts/main';
import { Navbar } from '@repo/ui/layouts/navbar';
import { View } from '@repo/ui/layouts/view';

export { generateStaticParams };

import { pickLng } from '@repo/utils/lng';

const RootLayout = async ({ children, params }: LayoutProps<'/[lng]'>) => {
  const lng = await pickLng(params);
  const menuLinks = await getMenuLinks(lng);

  return (
    <Layout lng={lng}>
      <View variant='child-3'>
        <Navbar lng={lng} menuLinks={menuLinks} siteName={siteName} />
        <Main>{children}</Main>
        <Footer copyright={copyright} lng={lng} />
      </View>
    </Layout>
  );
};
export default RootLayout;
