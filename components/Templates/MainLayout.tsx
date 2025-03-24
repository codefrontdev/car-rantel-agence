/** @format */

import { ThemeProvider, useTheme } from "next-themes";
import Navbar from "../organisms/Navbar";
import { ReactNode } from "react";
import Footer from "../Footer";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className=' bg-white dark:bg-black text-black dark:text-white'>
      <Navbar />
      <div className='mx-auto'>{children}</div>
      <Footer />
    </main>
  );
};

export default MainLayout;
