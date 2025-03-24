/** @format */

import Image from "next/image";
import React from "react";
import Button from "./Button";

const About = () => {
  return (
    <div className='flex flex-wrap lg:flex-nowrap items-center gap-8 justify-center lg:justify-between w-[90%] mx-auto mt-44'>
      {/* image left */}
      <div className='relative w-full md:w-[550px] order-2 lg:order-none h-96 rounded-2xl overflow-hidden'>
        <Image
          className='absolute top-0 left-0'
          priority
          fill
          sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw'
          src='/images/about1.avif'
          style={{ objectFit: "cover" }}
          alt=''
        />
        <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[90%] h-[90%] rounded-xl  border border-white' />
      </div>
      {/* content */}
      <div className='flex flex-col  order-1 lg:order-none  gap-2 p-14 items-center justify-center rounded-2xl text-center w-full md:w-[550px] h-96 bg-darkGray'>
        <h1 className='mb-4 text-4xl font-normal tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
          About <span className='text-yellow-600'>Us</span>
        </h1>
        <p className='text-sm font-extralight text-gray-500 dark:text-gray-400'>
          Your trusted source for buying or renting cars. We offer a wide
          selection, transparent pricing, and flexible financing options, all
          designed to make your experience smooth and hassle-free
        </p>
        <Button btntext='Learn More' />
      </div>
      {/* image right */}
      <div className='relative w-full md:w-[550px]  order-3 lg:order-none  h-96 rounded-2xl overflow-hidden'>
        <Image
          className='absolute top-0 left-0'
          priority
          fill
          style={{ objectFit: "cover" }}
          sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw'
          src='/images/about2.webp'
          alt=''
        />
        <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[90%] h-[90%] rounded-xl  border border-white' />
      </div>
    </div>
  );
};

export default About;
