/** @format */

"use client";
import React from "react";
import { useTranslations } from "next-intl";

const TermsAndPrivacy = () => {
  const t = useTranslations("signIn.page");

  return (
    <div className='text-center text-xs dark:text-dark-lightGray text-dark-MediumGray max-w-[350px] flex flex-col justify-between items-center'>
      <p>
        {t("teams.label")} <a href=''>{t("teams.link")}</a> {t("teams.and")}{" "}
        <a href=''>{t("privacy.link")}</a>
      </p>
      <span>{t("privacy.label")}</span>
      <a href=''>{t("privacy.copyright")}</a>
    </div>
  );
};

export default TermsAndPrivacy;
