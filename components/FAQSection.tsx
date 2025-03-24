/** @format */

import { FAQImage } from "./FAQ/FAQImage";
import { FAQList } from "./FAQ/FAQList";

export const FAQSection = () => {
  return (
    <div className='flex items-center flex-wrap lg:flex-nowrap gap-10 lg:gap-20 justify-center lg:justify-between lg:w-[80%] w-full mx-auto mt-44'>
      <div className='lg:w-1/2'>
        <h2 className='py-7 text-5xl font-normal'>
          Frequently Asked <span className='text-yellow-500'>Questions</span>
        </h2>
        <FAQImage />
      </div>
      <FAQList />
    </div>
  );
};

