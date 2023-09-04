/* eslint-disable @next/next/no-sync-scripts */
import Collapse from '@/components/collapse';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Opacity from '@/components/opacity';
import { CollapseProvider } from '@/context/collapse';
import { ThemeProvider } from '@/context/theme';
import Toaster from '@/lib/toaster';

import '@/styles/themes-config.css';
import ChildrenProps from '@/types/children';

import { Container, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

const RootLayout = (props: ChildrenProps) => {
  return (
    <html lang='es' suppressHydrationWarning>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
      </head>
      <body>
        <Theme appearance='light'>
          <Container size='3' p='5' mt='9'>
            <CollapseProvider>
              <Opacity />
              <ThemeProvider>
                <Navbar />
                <Collapse />
              </ThemeProvider>
              {props.children}
              <Footer />
            </CollapseProvider>
          </Container>
        </Theme>
        <Toaster
          position='top-center'
          reverseOrder={false}
          toastOptions={{
            style: {
              color: 'white',
              background: 'black',
            },
          }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
