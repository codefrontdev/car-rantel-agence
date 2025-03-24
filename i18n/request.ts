/** @format */

import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
    const cookie = (await cookies()).get("NEXT_LOCALE")?.value ?? "en";
  const locale = cookie;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
