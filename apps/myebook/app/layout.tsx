import '@app/myebook/styles/globals.css';

import { MYEBOOK_ROUTES } from '@app/myebook/constants/paths';
import { locale, siteName, theme } from '@app/myebook/settings';
import { Toaster } from '@repo/ui/components/sonner';
import { AppThemeProvider } from '@repo/ui/context/theme';
import { Main } from '@repo/ui/layouts/main';
import { Navbar } from '@repo/ui/layouts/navbar';
import { View } from '@repo/ui/layouts/view';
import type { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html suppressHydrationWarning lang={locale}>
    <body>
      <View variant='child-3'>
        <AppThemeProvider defaultTheme={theme}>
          <Navbar routes={MYEBOOK_ROUTES} siteName={siteName} />
        </AppThemeProvider>

        <Main>{children}</Main>
        <footer>footer</footer>
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

export default RootLayout;
