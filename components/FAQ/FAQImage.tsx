/** @format */

import Image from "next/image";

export const FAQImage = () => {
  return (
    <div className='relative lg:order-none order-2 w-full md:w-[500px] h-[450px] rounded-2xl overflow-hidden'>
      <Image
        className='absolute top-0 left-0'
        priority
        fill
        style={{ objectFit: "cover" }}
        sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw'
        src='/images/about2.webp'
        alt='FAQ Image'
      />
      <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[90%] h-[90%] rounded-xl border border-white' />
    </div>
  );
};
