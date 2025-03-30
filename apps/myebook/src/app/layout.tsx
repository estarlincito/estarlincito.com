import '@/styles/themes-config.css';
import '@radix-ui/themes/styles.css';
import '@/styles/globals.css';

import { Theme } from '@radix-ui/themes';
import { Toaster } from '@repo/ui';
import React from 'react';

import AppThemeProvider from '@/context/theme';
import Props from '@/types/children';

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Theme accentColor='sky' radius='full'>
          ={children}
          <AppThemeProvider>
            <div></div>
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
};

export default RootLayout;
