import '@app/budget/styles/globals.css';

import { locale, theme } from '@app/budget/settings';
import { Toaster } from '@repo/ui/components/sonner';
import { AppThemeProvider } from '@repo/ui/context/theme';
import { Main } from '@repo/ui/layouts/main';
import { View } from '@repo/ui/layouts/view';
import type { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html suppressHydrationWarning lang={locale}>
    <body>
      <AppThemeProvider defaultTheme={theme} />
      <View variant='child-1'>
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

export default RootLayout;
