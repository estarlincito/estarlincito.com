import '@/styles/themes-config.css';
import '@radix-ui/themes/styles.css';

import { Theme } from '@radix-ui/themes';
import type React from 'react';

import { Toaster } from '@/components/toaster';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Theme accentColor='crimson' radius='full'>
          {children}
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
