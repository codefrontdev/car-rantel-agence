/** @format */
"use client";
import { useState } from "react";
import Menu from "../molecules/Menu";
import MenuMobile from "../molecules/MenuMobile";
import NavRight from "../molecules/NavRight";
import { TbMenu3 } from "react-icons/tb";
import { Search } from "lucide-react";
import { IoMdClose } from "react-icons/io";
import ThemeSwitcher from "../molecules/ThemeSwitcher";
import LanguageSwitcher from "../molecules/LangSwitcher";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='sticky top-0  left-0 z-50 flex justify-between flex-wrap lg:flex-nowrap rounded-br-lg rounded-bl-lg items-center py-4 px-4 sm:px-8 lg:px-16 md:px-10 xl:px-20 bg-lightGray dark:bg-dark-MediumGray'>
      <h1 className='text-lg md:text-xl lg:text-2xl font-semibold uppercase order-1 md:order-none'>
        flexicar
      </h1>
      <Menu className='hidden sm:flex-row md:flex sm:hidden' />
      <div className='flex justify-between items-center gap-3 order-2 md:order-none'>
        <LanguageSwitcher />
        <NavRight className='hidden sm:flex' />
        <div className='sm:hidden cursor-pointer p-2 border border-gray-600 dark:border-gray-300 rounded-full'>
          <Search size={20} />
        </div>
        <div className='sm:hidden p-1.5 cursor-pointer border border-gray-600 dark:border-gray-300 rounded-full'>
          <ThemeSwitcher />
        </div>


        <div
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden block cursor-pointer p-2 bg-green-600 rounded-full'>
          {isOpen ? <IoMdClose size={20} /> : <TbMenu3 size={20} />}
        </div>
      </div>
      {isOpen && <MenuMobile className='md:hidden' />}
    </nav>
  );
};

export default Navbar;
