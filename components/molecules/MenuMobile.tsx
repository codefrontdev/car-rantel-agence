/** @format */

import React from "react";
import { motion } from "framer-motion";
import Menu from "./Menu";
import NavRight from "./NavRight";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LangSwitcher";
import { Heart, UserRound } from "lucide-react";
import { HiOutlineShoppingBag } from "react-icons/hi";

interface MenuMobileProps {
  className?: string;
}

const MenuMobile: React.FC<MenuMobileProps> = ({ className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`absolute top-[69.5px] left-0 w-1/2 h-screen p-8 bg-white dark:bg-black text-black dark:text-white shadow-lg ${className}`}>
      <Menu className='flex flex-col items-center justify-center' />

      <div
        className={`flex flex-col pt-10 sm:hidden gap-4 xl:gap-5 border-t ${className}`}>
  
          <div className='cursor-pointer p-2 border border-gray-300 rounded-full'>
            <Heart size={20} />
          </div>
          <div className='cursor-pointer p-2 border border-gray-300 rounded-full'>
            <HiOutlineShoppingBag size={20} />
          </div>
          <div className='cursor-pointer p-2 border border-gray-300 rounded-full'>
            <UserRound size={20} />
          </div>
      </div>
    </motion.div>
  );
};

export default MenuMobile;
