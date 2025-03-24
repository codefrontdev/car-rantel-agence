import React from 'react'
import Title from './Title';
import BestCarCard from './BestCarCard';
import Button from './Button';



const cars = [
  {
    name: "Mercedes-Benz C-Class",
    price: "$150/day",
    mileage: "Unlimited",
    image: "/images/heroImg.png",
  },
  {
    name: "2022 Audi Q7",
    price: "$180/day",
    mileage: "Unlimited",
    image: "/images/heroImg.png",
  },
  {
    name: "2021 Ford Mustang",
    price: "$200/day",
    mileage: "Unlimited",
    image: "/images/heroImg.png",
  },
];
const CarRentalDeals: React.FC = () => {
  return (
    <div className='flex text-white flex-col items-center gap-20 justify-between lg:w-[95%] rounded-[50px] w-full mx-auto p-10 mt-44 bg-black'>
      <Title
        title={
          <span className='text-white'>
            Best Car <span className='text-yellow-600'>Rental</span> Deals
          </span>
        }
        paragraph='Looking for a rental car? Check out our selection of cars available for rent with flexible terms and competitive rates.'
        btntext='View All'
      />
      <div className='flex w-full gap-14 justify-center flex-wrap'>
        {cars.map((car, index) => (
          <BestCarCard key={index} {...car} />
        ))}
      </div>
      <Button btntext='View All' className='lg:hidden inline-flex' />
    </div>
  );
}

export default CarRentalDeals