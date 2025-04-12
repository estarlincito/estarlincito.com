import '@/styles/themes-config.css';

import { AppThemeProvider, LayoutContainer, Theme } from '@repo/ui';
import type { ReactNode } from 'react';

import { Toaster } from '@/components/ui/toaster';

const Layout = ({ children }: { children: ReactNode }) => (
  <html suppressHydrationWarning lang='en'>
    <body>
      <Theme accentColor='iris'>
        <AppThemeProvider defaultTheme=''>
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
