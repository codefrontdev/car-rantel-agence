/** @format */

import SignIn from "@/components/Templates/SignIn";
import { Metadata } from "next";
import { AbstractIntlMessages } from "next-intl";
import { getMessages } from "next-intl/server";
import Image from "next/image";
import React from "react";

// تعريف النوع بما يتوافق مع بنية ملف الترجمة الجديد
interface Messages extends AbstractIntlMessages {
  signIn: {
    [key: string]: {
      title: string;
      description: string;
    };
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const messages = (await getMessages()) as Messages;

  const title = messages.signIn["meta-data"].title;
  const description = messages.signIn["meta-data"].description;

  return {
    title,
    description,
    keywords: ["car rental", "best offers", "nextjs"],
    openGraph: {
      title,
      description,
      url: "https://www.mywebsite.com",
      images: [
        {
          url: "https://www.mywebsite.com/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: "https://www.mywebsite.com/twitter-image.jpg",
    },
  };
}

const SignInPage = () => {
  return (
    <>
      <SignIn />
    </>
  );
};

export default SignInPage;
