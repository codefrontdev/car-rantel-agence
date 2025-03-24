/** @format */

import Link from "next/link";
import React from "react";

interface MenuItemLinkProps {
  href: string;
  label: string;
}

const MenuItemLink: React.FC<MenuItemLinkProps> = ({ href, label }) => {
  return (
    <li>
      <Link className="text-lg md:text-sm lg:text-base xl:text-lg font-light md:font-normal lg:font-medium xl:font-semibold" href={href}>{label}</Link>
    </li>
  );
};

export default MenuItemLink;
