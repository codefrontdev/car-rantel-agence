import { Oswald } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import MainLayout from "@/components/Templates/MainLayout";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";


const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
const locale = await getLocale();
  const messages = await getMessages();
  
  const plainMessages = JSON.parse(JSON.stringify(messages));

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} suppressHydrationWarning>
      <body
        className={`${oswald.variable} antialiased bg-green-600`}>
        <NextIntlClientProvider messages={plainMessages} locale={locale}>
          <ThemeProvider attribute='class' enableSystem>
            <MainLayout>{children}</MainLayout>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
