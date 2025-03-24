/** @format */

import About from "@/components/About";
import Input from "@/components/atoms/Input";
import Select from "@/components/atoms/Select";
import AutoLogos from "@/components/AutoLogos";
import BlogAuto from "@/components/BlogAuto";
import CarRentalDeals from "@/components/CarRentalDeals";
import CustomerReviews from "@/components/CustomerReviews";
import { FAQSection } from "@/components/FAQSection";
import Hero from "@/components/Hero";
import Home from "@/components/Templates/Home";
import TopPicksCars from "@/components/TopPicksCars";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Metadata } from "next";
import { AbstractIntlMessages } from "next-intl";
import { getMessages } from "next-intl/server";

interface Messages extends AbstractIntlMessages {
  home: {
    [key: string]: {
      title: string;
      description: string;
      book_now: string;
      language: string;
    };
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const messages = (await getMessages()) as Messages;

  const title = messages.home["meta-data"].title;
  const description = messages.home["meta-data"].description;

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

export default async function HomePage() {
  return (
    <>
      <Hero
        title={<><span className='text-yellow-500'>Buy</span> or{" "}
          <span className='text-yellow-500'> Rent</span> Your Dream Car</>}
        paragraph={`Looking to buy or rent a car? Explore our vast inventory of cars for
          sale or rent at unbeatable prices. Start your journey with us today
          and find the perfect vehicle for your needs!`}
        
        compoImg="/images/heroImg.png"
      />
      <About />
      <AutoLogos />
      <TopPicksCars />
      <CarRentalDeals />
      <WhyChooseUs />
      <FAQSection />
      <CustomerReviews />
      <BlogAuto />
    </>
  );
}
