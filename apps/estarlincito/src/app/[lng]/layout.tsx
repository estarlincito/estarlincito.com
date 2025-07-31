import '@/styles/globals.css';

import { copyright } from '@repo/content/estarlincito/settings';
import { generateStaticParams } from '@repo/content/utils/locales';
import { SidebarProvider } from '@repo/ui/components/sidebar';
import { Footer } from '@repo/ui/layouts/footer';
import { Layout } from '@repo/ui/layouts/layout';
import { Main } from '@repo/ui/layouts/main';
import { View } from '@repo/ui/layouts/view';

import { AppSidebar } from '@/features/layout/components/app-sidebar';
import { Navbar } from '@/features/layout/components/navbar';

export { generateStaticParams };

import { getMenuLinks } from '@repo/content/estarlincito/routes';
import { getThemeLabels } from '@repo/content/shared/theme';
import type { LayoutProps } from '@repo/types/layout';

const RootLayout = async ({ children, params }: LayoutProps) => {
  const { lng } = await params;
  const menuLinks = await getMenuLinks(lng);
  const themeLabels = await getThemeLabels(lng);

  return (
    <Layout lng={lng}>
      <SidebarProvider>
        <AppSidebar {...menuLinks} {...themeLabels} />
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
