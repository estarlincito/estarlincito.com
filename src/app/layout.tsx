/* eslint-disable @next/next/no-sync-scripts */
import Collapse from '@/components/collapse';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Opacity from '@/components/opacity';
import { CollapseProvider } from '@/context/collapse';
import { ThemeProvider } from '@/context/theme';
import '@/styles/globals.css';
import ChildrenProps from '@/types/children';
import clsx from 'clsx';

const RootLayout = (props: ChildrenProps) => {
  return (
    <html lang='es'>
      <body
        className={clsx(
          'font-sans bg-white text-neutral-900',
          'dark:bg-black dark:text-neutral-200'
        )}
      >
        <CollapseProvider>
          <Opacity />
          <ThemeProvider>
            <Navbar />
            <Collapse />
          </ThemeProvider>
          {props.children}
          <Footer />
        </CollapseProvider>
      </body>
    </html>
  );
};

export default RootLayout;
