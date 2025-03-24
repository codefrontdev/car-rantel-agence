/** @format */

"use client";
import { OptionType } from "@/components/organisms/Hero";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const setLocaleToCookies = (locale: string) => {
  document.cookie = `NEXT_LOCALE=${locale}; path=/;`;
};

export const useLocaleHook = () => {
  const router = useRouter();
  const locale = useLocale();

  const changeLocale = useCallback(
    (newLocale: OptionType) => {
      if (newLocale.label !== locale) {
        setLocaleToCookies(newLocale.label);
        router.refresh();
      }
    },
    [locale, router]
  );

  return { changeLocale };
};
