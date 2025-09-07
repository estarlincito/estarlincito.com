import '@repo/ui/themes/yellow.css';

import { getMenuLinks } from '@repo/content/ibukku/routes';
import { copyright, siteName } from '@repo/content/ibukku/settings';
import { generateStaticParams } from '@repo/content/shared/locales';
import { Layout } from '@repo/ui/layouts/layout';
import { Main } from '@repo/ui/layouts/main';
import { Navbar } from '@repo/ui/layouts/navbar';
import { View } from '@repo/ui/layouts/view';

export { generateStaticParams };

import { Footer } from '@repo/ui/layouts/footer';
import { pickLng } from '@repo/utils/lng';

export { default } from '@repo/ui/pages/maintenance';

export const RootLayout = async ({
  children,
  params,
}: LayoutProps<'/[lng]'>) => {
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
// export { RootLayout as default };
