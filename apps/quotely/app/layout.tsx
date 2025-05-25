import '@app/quotely/styles/globals.css';

import { Footer } from '@app/quotely/components/layout/footer';
import { QUOTELY_ROUTES } from '@app/quotely/constants/paths';
import { locale, siteName, theme } from '@app/quotely/settings';
import { Toaster } from '@repo/ui/components/sonner';
import { AppThemeProvider } from '@repo/ui/context/theme';
import { Main } from '@repo/ui/layouts/main';
import { Navbar } from '@repo/ui/layouts/navbar';
import { View } from '@repo/ui/layouts/view';
import type { ReactNode } from 'react';

const RootLayout = async ({ children }: { children: ReactNode }) => (
  <html suppressHydrationWarning lang={locale}>
    <body>
      <View variant='child-3'>
        <AppThemeProvider defaultTheme={theme}>
          <Navbar routes={QUOTELY_ROUTES} siteName={siteName} />
        </AppThemeProvider>
        <Main> {children}</Main>
        <Footer />
      </View>

      <Toaster position='top-center' />
    </body>
  </html>
);
export default RootLayout;
