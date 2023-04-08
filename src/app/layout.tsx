import { Footer, Header, Navbar, Opacity } from '@UI/organisms';
import '@/styles/globals.css';
import { CollapseProvider, ThemeProvider } from '@/context';
import { Children } from '@/types';

const RootLayout: React.FC<Children> = ({ children }) => {
  return (
    <html lang='es'>
      <body className='grid content-between h-screen font-sans bg-white dark:bg-black text-neutral-900 dark:text-neutral-200'>
        <CollapseProvider>
          <Opacity />
          {/* <Header /> */}
          <ThemeProvider>
            <Navbar />
          </ThemeProvider>
          {children}
          <Footer />
        </CollapseProvider>
      </body>
    </html>
  );
};

export default RootLayout;
