/* eslint-disable @next/next/no-sync-scripts */
import { Collapse } from '@/components/UI/molecules';
import { CollapseProvider, ThemeProvider } from '@/context';
import '@/styles/globals.css';
import { ChildrenProps } from '@/types';
import { Footer, Navbar, Opacity } from '@UI/organisms';
import clsx from 'clsx';

const RootLayout: React.FC<ChildrenProps> = ({ children }) => {
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
          {/* <Header /> */}
          <ThemeProvider>
            <Navbar />
            <Collapse />
          </ThemeProvider>
          {children}
          <Footer />
        </CollapseProvider>
      </body>
    </html>
  );
};

export default RootLayout;
