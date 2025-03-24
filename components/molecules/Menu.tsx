/** @format */

import React from "react";
import MenuItemLink from "../atoms/MenuItemLink";
import { useTranslations } from "next-intl";

interface MenuProps {
  className?: string;
}

const Menu: React.FC<MenuProps> = ({ className }) => {
  const t = useTranslations("navbar");

  // مصفوفة القائمة مع الترجمة الديناميكية
  const menuItems = [
    { label: t("menu.home"), href: "/" },
    { label: t("menu.buy"), href: "/buy" },
    { label: t("menu.rent"), href: "/rent" },
    { label: t("menu.financing"), href: "/financing" },
    { label: t("menu.about"), href: "/about" },
  ];

  return (
    <ul
      className={`flex flex-col p-10 md:p-0 items-center gap-8 lg:gap-6 md:gap-4 xl:gap-10 m-auto order-3 md:order-none ${className}`}>
      {menuItems.map((item, index) => (
        <MenuItemLink key={index} href={item.href} label={item.label} />
      ))}
    </ul>
  );
};

export default Menu;
