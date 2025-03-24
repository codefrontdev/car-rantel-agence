/** @format */

import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LangSwitcher";
import { Heart, Search, UserRound } from "lucide-react";
import { HiOutlineShoppingBag } from "react-icons/hi";

interface NavRightProps {
  className?: string;
  themeClass?: string;
  langClass?: string;
  heartClass?: string;
  searchClass?: string;
  bagClass?: string;
  userClass?: string;
}

const NavRight: React.FC<NavRightProps> = ({ className }) => {
  return (
    <div className={`flex items-center gap-4 md:gap-2 lg:gap-4 xl:gap-5 ${className}`}>
      <ThemeSwitcher />
      <LanguageSwitcher />
      <Search size={20} />
      <Heart size={20} />
      <HiOutlineShoppingBag size={20} />
      <UserRound size={20} />
    </div>
  );
};

export default NavRight;
