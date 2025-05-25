import '@app/estarlincito/styles/globals.css';

import { AppSidebar } from '@app/estarlincito/components/app-sidebar';
import { Footer } from '@app/estarlincito/components/layout/footer';
import { Navbar } from '@app/estarlincito/components/layout/navbar';
import { locale, theme } from '@app/estarlincito/settings';
import { SidebarProvider } from '@repo/ui/components/sidebar';
import { Toaster } from '@repo/ui/components/sonner';
import { AppThemeProvider } from '@repo/ui/context/theme';
import { Main } from '@repo/ui/layouts/main';
import { View } from '@repo/ui/layouts/view';
import type { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => (
  <html suppressHydrationWarning lang={locale}>
    <body>
      <SidebarProvider>
        <AppThemeProvider defaultTheme={theme}>
          <AppSidebar />
        </AppThemeProvider>
        <View variant='child-3'>
          <Navbar />
          <Main>{children}</Main>
          <Footer />
        </View>
      </SidebarProvider>

      <Toaster
        position='top-center'
        toastOptions={{
          style: {
            background: 'black',
            color: 'white',
          },
        }}
      />
    </body>
  </html>
);

export default Layout;
