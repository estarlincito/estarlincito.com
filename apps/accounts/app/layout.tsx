import '@app/accounts/styles/globals.css';

import Navbar from '@app/accounts/components/layouts/navbar';
import { locale, theme } from '@app/accounts/settings';
import { Toaster } from '@repo/ui/components/sonner';
import { AppThemeProvider } from '@repo/ui/context/theme';
import { Main } from '@repo/ui/layouts/main';
import { View } from '@repo/ui/layouts/view';
import type { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => (
  <html suppressHydrationWarning lang={locale}>
    <body>
      <AppThemeProvider defaultTheme={theme} />

      <View variant='child-2'>
        <Navbar />
        <Main>{children}</Main>
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
