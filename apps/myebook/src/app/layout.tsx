import '@/styles/themes-config.css';
import '@/styles/globals.css';

import { myebook } from '@repo/constants';
import { AppThemeProvider, LayoutContainer, Theme } from '@repo/ui';
import type { ReactNode } from 'react';

import { Toaster } from '@/components/ui/toaster';

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html suppressHydrationWarning lang={myebook.locale}>
    <body>
      <Theme accentColor='sky' radius='full'>
        <LayoutContainer threePart>{children}</LayoutContainer>
        <AppThemeProvider defaultTheme={myebook.theme}>
          <div />
        </AppThemeProvider>
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

export default RootLayout;
