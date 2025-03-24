/** @format */

"use client";
import React from "react";
import Button from "../atoms/Button";
import { FacebookIcon, GoogleIcon } from "../atoms/Icon";
import { useTranslations } from "next-intl";
import { Apple } from "lucide-react";

const SocialButtons = () => {
  const t = useTranslations("signIn.page.buttons");

  return (
    <div className='flex flex-col gap-2 w-full'>
      <Button
        text={t("google")}
        className='w-full justify-center bg-lightGray dark:bg-dark-MediumGray'
        icon={<GoogleIcon />}
      />
      <Button
        text={t("facebook")}
        className='w-full justify-center bg-lightGray dark:bg-dark-MediumGray'
        icon={<FacebookIcon />}
      />
      <Button
        text={t("apple")}
        className='w-full justify-center bg-lightGray dark:bg-dark-MediumGray'
        icon={<Apple />}
      />
    </div>
  );
};

export default SocialButtons;
