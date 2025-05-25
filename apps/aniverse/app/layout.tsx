import '@app/aniverse/styles/globals.css';

import { ANIVERSE_ROUTES } from '@app/aniverse/constants/paths';
import { locale, siteName, theme } from '@app/aniverse/settings';
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
          <Navbar routes={ANIVERSE_ROUTES} siteName={siteName} />
        </AppThemeProvider>

        <Main>{children}</Main>
        <footer>Footer</footer>
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
