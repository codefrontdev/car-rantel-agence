import React from 'react'
import Title from './Title'
import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <div className='flex flex-col flex-wrap items-center gap-20 justify-between lg:w-[90%] w-full mx-auto mt-44'>
      <div className='max-w-[500px] text-center mx-auto'>
        <h2 className='py-8 text-5xl font-normal'>
          Why <span className='text-yellow-500'>Choose</span> Us
        </h2>
        <p className='text-[#707070] text-xl lg:text-base'>
          We provide a smooth car buying or renting experience with great
          vehicle options, clear pricing, and top-notch customer support.
        </p>
      </div>
      <div className='flex flex-col lg:flex-row flex-wrap items-center gap-20 justify-between w-full'>
        <div className='flex flex-col gap-10 flex-wrap text-center lg:text-start lg:max-w-[295px]'>
          <div className='flex flex-col gap-4 items-center lg:items-start'>
            {/* icon */}
            <div className='relative w-10 h-10'>
              <div className='absolute -left-2 top-1/2 translate-y-[-50%] w-8 h-8 rounded-full bg-yellow-300' />
              <Image
                src={"/images/insured.png"}
                className='absolute w-full h-full top-0 left-0 rounded-full transition-transform duration-300 group-hover:scale-105'
                priority
                fill
                style={{ objectFit: "cover" }}
                sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw'
                alt={"name"}
              />
            </div>
            {/* title  */}
            <h2 className='text-4xl lg:text-2xl'>Wide selection of vehicles</h2>
            {/* paragh */}
            <p className='text-[#707070] text-xl lg:text-base'>
              Choose from a diverse selection of cars to suit your style and
              budget, whether you're looking to buy or rent.{" "}
            </p>
          </div>
          <div className='flex flex-col gap-4 items-center lg:items-start'>
            {/* icon */}
            <div className='relative w-10 h-10'>
              <div className='absolute -left-2 top-1/2 translate-y-[-50%] w-8 h-8 rounded-full bg-yellow-300' />
              <Image
                src={"/images/priceIcon.png"}
                className='absolute w-full h-full top-0 left-0 rounded-full transition-transform duration-300 group-hover:scale-105'
                priority
                fill
                style={{ objectFit: "cover" }}
                sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw'
                alt={"name"}
              />
            </div>
            {/* title  */}
            <h2 className='text-4xl lg:text-2xl'>Transparent Pricing </h2>
            {/* paragh */}
            <p className='text-[#707070] text-xl lg:text-base'>
              We believe in clear, upfront pricing with no hidden fees, ensuring
              you get the best deal on your vehicle.
            </p>
          </div>
        </div>
        <div className='relative rounded-full overflow-hidden w-80 h-[450px]'>
          <Image
            src={"/images/download.jpg"}
            className='absolute w-full h-full top-0 left-0 rounded-full transition-transform duration-300 group-hover:scale-105'
            priority
            fill
            style={{ objectFit: "cover" }}
            sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw'
            alt={"name"}
          />
        </div>

        <div className='flex flex-col gap-10 flex-wrap text-center lg:text-start lg:max-w-[295px]'>
          <div className='flex flex-col gap-4 items-center lg:items-start'>
            {/* icon */}
            <div className='relative w-10 h-10'>
              <div className='absolute -left-2 top-1/2 translate-y-[-50%] w-8 h-8 rounded-full bg-yellow-300' />
              <Image
                src={"/images/money-icon-crop.png"}
                className='absolute w-full h-full top-0 left-0 rounded-full transition-transform duration-300 group-hover:scale-105'
                priority
                fill
                style={{ objectFit: "cover" }}
                sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw'
                alt={"name"}
              />
            </div>
            {/* title  */}
            <h2 className='text-4xl lg:text-2xl'>Flexible Financing Options </h2>
            {/* paragh */}
            <p className='text-[#707070] text-xl lg:text-base'>
              Get customized financing plans that fit your budget, making it
              easier to drive away in your dream car.
            </p>
          </div>
          <div className='flex flex-col gap-4 items-center lg:items-start'>
            {/* icon */}
            <div className='relative w-10 h-10'>
              <div className='absolute -left-2 top-1/2 translate-y-[-50%] w-8 h-8 rounded-full bg-yellow-300' />
              <Image
                src={"/images/ICONS_innovation-untilizingbgreen.png"}
                className='absolute w-full h-full top-0 left-0 rounded-full transition-transform duration-300 group-hover:scale-105'
                priority
                fill
                style={{ objectFit: "cover" }}
                sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw'
                alt={"name"}
              />
            </div>
            {/* title  */}
            <h2 className='text-4xl lg:text-2xl'>Exceptional Customer Service </h2>
            {/* paragh */}
            <p className='text-[#707070] text-xl lg:text-base'>
              Our team is dedicated to providing personalized support, ensuring
              a seamless experience from start to finish
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs