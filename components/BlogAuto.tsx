/** @format */

import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const articles = [
  {
    title: "Top 5 Tips for First-Time Car Buyers",
    description:
      "Buying your first car? Here are essential tips to help you make a smart choice and get the best deal.",
    date: "2024-11-04",
    read_more: "Read More",
  },
  {
    title: "How to Maintain Your Car for Long-Term Performance",
    date: "2024-10-08",
    read_more: "Read More",
  },
  {
    title: "The Future of Electric Vehicles: What You Need to Know",
    date: "2024-10-12",
    read_more: "Read More",
  },
  {
    title: "Renting vs. Buying: Which Option is Right for You?",
    date: "2024-10-26",
    read_more: "Read More",
  },
];

const BlogAuto = () => {
  return (
    <div className='flex p-4 flex-col items-center flex-wrap lg:flex-nowrap gap-10 lg:gap-20 justify-center lg:justify-between lg:w-[90%] w-full mx-auto my-40'>
      <div className='max-w-[650px] text-center mx-auto '>
        <h2 className='py-8 text-5xl font-normal leading-snug'>
          Stay Updated with the Latest Car{" "}
          <span className='text-yellow-500'>Trends</span> and
          <span className='text-yellow-500'>Tips</span>
        </h2>
      </div>
      <div className='flex flex-wrap lg:flex-nowrap gap-10 w-full lg:h-[550px] h-fit'>
        <div
          className="relative w-full lg:w-1/2 h-[550px] rounded-3xl overflow-hidden bg-[url('/images/blogAuto.jpg')] bg-no-repeat bg-cover"
         >
          <div className='absolute bottom-0 left-0 w-full text-white p-10 flex flex-col gap-5'>
            <h2 className='text-2xl'>{articles[0].title}</h2>
            <p className='text-base max-w-96 font-normal'>
              {articles[0].description}
            </p>
            <div className='flex justify-between items-center'>
              <Link href={"#"} className='underline text-green-600'>
                Read More
              </Link>
              <span className='flex items-center gap-2'>
                <Calendar />
                {articles[0].date}
              </span>
            </div>
          </div>
        </div>

        <div className='w-full lg:w-1/2 lg:h-full h-[550px] flex flex-col gap-5'>
          {articles.slice(1).map((article, index) => (
            <div key={index} className='flex gap-10 h-1/2 justify-between'>
              <div className='relative h-full w-80 rounded-3xl overflow-hidden'>
                <Image
                  src='/images/blogAuto.jpg'
                  alt='Image'
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                  sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
              </div>
              <div className='w-full flex flex-col gap-5'>
                <span className='flex items-center gap-2'>
                  <Calendar />
                  {articles[0].date}
                </span>
                <h2 className='text-2xl'>{article.title}</h2>
                <Link href={"#"} className='underline text-green-600'>
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogAuto;
