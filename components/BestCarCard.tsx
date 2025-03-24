/** @format */

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface BestCarCardProps {
  name: string;
  price: string;
  mileage: string;
  image: string;
}

const BestCarCard: React.FC<BestCarCardProps> = ({
  name,
  price,
  mileage,
  image,
}) => {
  return (
    <div
      className='group lg:flex-1 min-w-[300px] lg:max-w-[400px] h-96 rounded-2xl bg-white p-1 flex flex-col justify-between 
      transition-all duration-300'>
      <div className='relative w-full h-1/2'>
        <Image
          className='absolute top-0 left-0 transition-transform duration-300 group-hover:scale-105'
          priority
          fill
          sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw'
          style={{ objectFit: "contain" }}
          src={image}
          alt={name}
        />
      </div>
      <div className='lg:bg-gray-300 lg:group-hover:bg-green-700 w-full p-5 rounded-2xl'>
        <div className='flex justify-between items-center'>
          <h3 className='text-lg font-semibold lg:group-hover:text-white text-black'>
            {name}
          </h3>
          <button
            type='button'
            className='inline-flex p-3 justify-center items-center text-base font-medium text-white rounded-full bg-green-800 
          lg:group-hover:bg-white lg:group-hover:text-green-700 focus:ring-4 focus:ring-green-400 dark:focus:ring-green-600'>
            <ArrowUpRight />
          </button>
        </div>
        <div className='flex justify-between items-center mt-5 '>
          <h4 className='text-lg text-gray-500 lg:group-hover:text-gray-200'>
            Price:{" "}
            <span className='text-black lg:group-hover:text-white'>${price}</span>
          </h4>
          <h4 className='text-lg text-gray-500 lg:group-hover:text-gray-200'>
            Mileage:{" "}
            <span className='text-black lg:group-hover:text-white'>
              {mileage} Miles
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default BestCarCard;
