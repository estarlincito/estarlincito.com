import '@/styles/themes-config.css';

import { accounts } from '@repo/constants';
import { AppThemeProvider, LayoutContainer, Theme } from '@repo/ui';
import type { ReactNode } from 'react';

import { Toaster } from '@/components/toaster';

const Layout = ({ children }: { children: ReactNode }) => (
  <html suppressHydrationWarning lang={accounts.locale}>
    <body>
      <Theme accentColor='indigo'>
        <AppThemeProvider defaultTheme={accounts.theme}>
          <div />
        </AppThemeProvider>
        <LayoutContainer>{children}</LayoutContainer>
      </Theme>

      <Toaster
        position='top-center'
        reverseOrder={false}
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
