/** @format */

import React from "react";
import Title from "./Title";
import TopCarCard from "./TopCarCard ";
import Button from "./Button";

// تعريف مصفوفة السيارات
const cars = [
  {
    name: "2023 Tesla Model 3",
    price: "42,000",
    mileage: "15,000",
    description:
      "Electric sedan with autopilot, full self-driving capability, and a sleek design. Perfect for eco-conscious drivers.",
    image: "/images/heroImg.png",
  },
  {
    name: "Rolls-Royce Ghost 2023",
    price: "345,000",
    mileage: "5,000",
    description:
      "2023 Rolls-Royce Ghost delivers luxury, V12 power, and advanced tech for a premium driving experience.",
    image: "/images/heroImg.png",
  },
  {
    name: "2021 BMW X5",
    price: "55,000",
    mileage: "25,000",
    description:
      "Luxury SUV with powerful performance and advanced safety features for an unmatched driving experience.",
    image: "/images/heroImg.png",
  },
];

const TopPicksCars: React.FC = () => {
  return (
    <div className='flex flex-col items-center gap-20 justify-between lg:w-[90%] w-full mx-auto mt-44 px-5'>
      <Title
        title={
          <>
            Top Picks For Cars on <span className='text-yellow-600'>Sale</span>
          </>
        }
        paragraph='Discover our best deals on cars for sale. Handpicked just for you, these cars come with excellent pricing and top quality.'
        btntext='View All'
      />
      <div className='flex w-full gap-4 justify-center flex-wrap'>
        {cars.map((car, index) => (
          <TopCarCard key={index} {...car} />
        ))}
      </div>
      <Button btntext='View All' className='lg:hidden inline-flex' />
    </div>
  );
};

export default TopPicksCars;
