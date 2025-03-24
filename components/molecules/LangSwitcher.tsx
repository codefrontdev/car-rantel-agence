"use client";
import { useState } from "react";
import { useLocale, useTranslations,    } from "next-intl";

import { useLocaleHook } from "@/hook/useLocale";
import Select from "../atoms/Select";



const LanguageSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("navbar");
  const {  changeLocale } = useLocaleHook();
  const locale = useLocale();

  
  const lang = [
    { label: t("lang.ar"), value: "ar" },
    { label: t("lang.en"), value: "en" },
    { label: t("lang.fr"), value: "fr" },
  ];

  return (
    <div className={`relative`}>
      <Select
        lang={lang}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        locale={locale}
        changeLocale={changeLocale}
      />
    </div>
  );
};

export default LanguageSwitcher;
