/** @format */
"use client";
import Link from "next/link";
import React, { ReactNode } from "react";

interface HeroProps {
  img?: string;
  title: ReactNode;
  paragraph?: string;
  component?: ReactNode;
  compoImg?: string;
}

const Hero: React.FC<HeroProps> = ({
  img,
  title,
  paragraph,
  component: compon,
  compoImg,
}) => {
  return (
    <section
      style={{
        backgroundImage: img ? `url(${img})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className={`dark:bg-gray-900 relative h-[calc(800px-72px)] ${
        !compoImg && "justify-center"
      }  flex flex-col bg-black `}>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 '>
        <h1 className='mb-4 mx-auto !leading-tight text-4xl max-w-[480px] font-normal tracking-tight  text-white md:text-5xl lg:text-6xl dark:text-white'>
          {title}
        </h1>
        <p className='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400'>
          {paragraph}
        </p>
        <div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0'>
          <Link
            href='#'
            className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900'>
            Browse Cars for Sale
          </Link>
          <Link
            href='#'
            className='py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
            Explore Car Rentals
          </Link>
        </div>
        {compon && compon}
      </div>
      {compoImg && (
        <div
          className='absolute -bottom-32 left-1/2 translate-x-[-50%] w-1/2 h-[500px]'
          style={{
            backgroundImage: compoImg ? `url(${compoImg})` : "none",
            backgroundSize: "contain",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}></div>
      )}
    </section>
  );
};

export default Hero;
