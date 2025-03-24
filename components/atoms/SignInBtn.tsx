"use client";
import { LogIn } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SignInBtn: React.FC = () => {
  const pathName = usePathname();
  const locale = useLocale();
  const t = useTranslations("navbar");
  return (
    <>
      {!pathName.split("/").includes("sign-in") && (
        <Link href={`/sign-in`} className='flex gap-3 items-center'>
          <LogIn size={16} className={`${locale === "ar" ? "rotate-180" : ""}`} />
          {t("buttons.sign-in")}
        </Link>
      )}
    </>
  );
};

export default SignInBtn;
