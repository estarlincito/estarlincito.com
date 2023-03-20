import "./styles/globals.css";
import { Children } from "./types";
import Navbar from "./components/navbar/Navbar";
import ContextProvider from "./context";
import Opacity from "./components/Opacity";

const RootLayout = ({ children }: Children) => {
  return (
    <ContextProvider>
      <html lang="es">
        <body className="bg-white dark:bg-black dark:text-white">
          <Opacity />
          <Navbar />
          {children}
        </body>
      </html>
    </ContextProvider>
  );
};

export default RootLayout;
