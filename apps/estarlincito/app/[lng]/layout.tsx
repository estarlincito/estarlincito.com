import '@repo/ui/themes/default.css';

import { copyright } from '@repo/content/estarlincito/settings';
import { generateStaticParams } from '@repo/content/shared/locales';
import { SidebarProvider } from '@repo/ui/components/sidebar';
import { Footer } from '@repo/ui/layouts/footer';
import { Layout } from '@repo/ui/layouts/layout';
import { Main } from '@repo/ui/layouts/main';
import { View } from '@repo/ui/layouts/view';

import { AppSidebar } from '@/features/layout/components/app-sidebar';
import { Navbar } from '@/features/layout/components/navbar';

export { generateStaticParams };

import { getMenuLinks } from '@repo/content/estarlincito/routes';
import { pickLng } from '@repo/utils/lng';

const RootLayout = async ({ children, params }: LayoutProps<'/[lng]'>) => {
  const lng = await pickLng(params);
  const menuLinks = await getMenuLinks(lng);

  return (
    <Layout lng={lng}>
      <SidebarProvider>
        <AppSidebar {...menuLinks} />
        <View variant='child-3'>
          <Navbar {...menuLinks} />
          <Main>{children}</Main>
          <Footer copyright={copyright} lng={lng} />
        </View>
      </SidebarProvider>
    </Layout>
  );
};

export default RootLayout;
