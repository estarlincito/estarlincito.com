import '@app/carly/styles/globals.css';

import { Footer } from '@app/carly/components/layout/footer';
import { CARLY_ROUTES } from '@app/carly/constants/paths';
import { locale, siteName, theme } from '@app/carly/settings';
import { Toaster } from '@repo/ui/components/sonner';
import { AppThemeProvider } from '@repo/ui/context/theme';
import { Main } from '@repo/ui/layouts/main';
// import Navbar from '@/components/layout/navbar';
import { Navbar } from '@repo/ui/layouts/navbar';
import { View } from '@repo/ui/layouts/view';
import type { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html suppressHydrationWarning lang={locale}>
    <body>
      <View variant='child-3'>
        <AppThemeProvider defaultTheme={theme}>
          <Navbar routes={CARLY_ROUTES} siteName={siteName} />
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

export default RootLayout;
