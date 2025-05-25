import '@app/portfolio/styles/globals.css';

import { Footer } from '@app/portfolio/components/layout/footer';
import { PORTFOLIO_ROUTES } from '@app/portfolio/constants/paths';
import { locale, siteName, theme } from '@app/portfolio/settings';
import { Toaster } from '@repo/ui/components/sonner';
import { AppThemeProvider } from '@repo/ui/context/theme';
import { Main } from '@repo/ui/layouts/main';
import { Navbar } from '@repo/ui/layouts/navbar';
import { View } from '@repo/ui/layouts/view';
import type { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => (
  <html suppressHydrationWarning lang={locale}>
    <body>
      <View variant='child-3'>
        <AppThemeProvider defaultTheme={theme}>
          <Navbar routes={PORTFOLIO_ROUTES} siteName={siteName} />
        </AppThemeProvider>

        <Main>{children}</Main>
        <Footer />
      </View>

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
