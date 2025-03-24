/** @format */

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface CarProps {
  name: string;
  price: string;
  mileage: string;
  description: string;
  image: string;
}

const TopCarCard: React.FC<CarProps> = ({
  name,
  price,
  mileage,
  description,
  image,
}) => {
  return (
    <div
      className='group lg:flex-1 min-w-[200px] max-w-[400px] h-96 rounded-2xl bg-gray-300 p-6 flex flex-col justify-between 
      transition-all duration-300 hover:bg-green-700 hover:text-white gap-3'>
      {/* العنوان والزر */}
      <div className='flex justify-between items-center'>
        <h3 className='text-lg font-semibold group-hover:text-white'>{name}</h3>
        <button
          type='button'
          className='inline-flex p-3 justify-center items-center text-base font-medium text-white rounded-full bg-green-800 
          group-hover:bg-white group-hover:text-green-700 focus:ring-4 focus:ring-green-400 dark:focus:ring-green-600'>
          <ArrowUpRight />
        </button>
      </div>

      {/* المعلومات */}
      <div className='flex flex-col xl:flex-row justify-between items-start  xl:items-center gap-2' >
        <h4 className='text-lg text-gray-500 group-hover:text-gray-200'>
          Price:{" "}
          <span className='text-black group-hover:text-white'>${price}</span>
        </h4>
        <h4 className='text-lg text-gray-500 group-hover:text-gray-200'>
          Mileage:{" "}
          <span className='text-black group-hover:text-white'>
            {mileage} Miles
          </span>
        </h4>
      </div>

      {/* الوصف */}
      <p className='text-sm text-gray-600 group-hover:text-gray-200'>
        {description}
      </p>

      {/* الصورة */}
      <div className='relative w-full h-1/2'>
        <Image
          className='absolute top-0 left-0 transition-transform duration-300 group-hover:scale-105'
          priority
          fill
          style={{ objectFit: "contain" }}
          sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw'
          src={image}
          alt={name}
        />
      </div>
    </div>
  );
};

export default TopCarCard;
