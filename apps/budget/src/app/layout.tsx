import '@/styles/themes-config.css';

import { budget } from '@repo/constants';
import { AppThemeProvider, LayoutContainer, Theme } from '@repo/ui';
import type { ReactNode } from 'react';

import { Toaster } from '@/components/ui/toaster';

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html suppressHydrationWarning lang={budget.locale}>
    <body>
      <Theme accentColor='crimson' radius='full'>
        <AppThemeProvider defaultTheme={budget.theme}>
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

export default RootLayout;
