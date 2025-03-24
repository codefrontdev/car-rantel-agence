/** @format */

import Image from "next/image";
import React from "react";

const AutoLogos = () => {
  return (
    <div className='flex w-[90%] mx-auto bg-darkGray mt-10 rounded-2xl py-10 justify-center gap-20'>
      <div className='relative w-40 h-20'>
        <Image
          src={"/images/audi.png"}
          alt='logo'
          sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw'
          fill
          priority
        />
      </div>
      <div className='relative w-40 h-20'>
        <Image
          src={"/images/bmw.png"}
          alt='logo'
          sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw'
          fill
          priority
        />
      </div>
      <div className='relative w-40 h-20'>
        <Image
          src={"/images/chevrolet.png"}
          alt='logo'
          sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw'
          fill
          priority
        />
      </div>
      <div className='relative w-40 h-20'>
        <Image
          src={"/images/jaguar.png"}
          alt='logo'
          sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw'
          fill
          priority
        />
      </div>
      <div className='relative w-40 h-20'>
        <Image
          src={"/images/rolls-royce.png"}
          alt='logo'
          sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw'
          fill
          priority
        />
      </div>
    </div>
  );
};

export default AutoLogos;
