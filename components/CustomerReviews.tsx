/** @format */

"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import { VscQuote } from "react-icons/vsc";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
const testimonials = [
  {
    name: "John D.",
    image: "/images/john.jpg",
    review:
      "I had an amazing experience renting a car from here. The process was quick and hassle-free, and the vehicle was in perfect condition. Highly recommend their service!",
    rating: 5,
  },
  {
    name: "Emma L.",
    image: "/images/emma.jpg",
    review:
      "Excellent customer service and well-maintained cars. I will definitely rent from them again.",
    rating: 4,
  },
  {
    name: "Alex K.",
    image: "/images/alex.jpg",
    review:
      "Very smooth process and friendly staff. The car was clean and in great condition.",
    rating: 3.5,
  },
  {
    name: "Alex K.",
    image: "/images/alex.jpg",
    review:
      "Very smooth process and friendly staff. The car was clean and in great condition.",
    rating: 5,
  },
  {
    name: "Alex K.",
    image: "/images/alex.jpg",
    review:
      "Very smooth process and friendly staff. The car was clean and in great condition.",
    rating: 5,
  },
];

const CustomerReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiper = useRef<SwiperRef | null>(null);

  const handleNextClick = () => {
    if (swiper) {
      swiper.current?.swiper.slideNext();
    }
  };

  const handlePrevClick = () => {
    console.log(swiper);
    if (swiper) {
      swiper.current?.swiper.slidePrev();
    }
  };

  return (
    <div className='relative flex flex-col p-20 flex-wrap items-center bg-darkGray rounded-3xl gap-20 justify-between lg:w-[97%] w-full mx-auto mt-44'>
      <div className='max-w-[520px] text-center mx-auto'>
        <h2 className='py-8 text-5xl font-normal'>
          What our customers are <span className='text-yellow-500'>saying</span>{" "}
          about us
        </h2>
      </div>
      <Swiper
        ref={swiper}
        centeredSlides={true}
        spaceBetween={21}
        initialSlide={1}
        loop={true}
        className='relative !w-full !h-full'
        slidesPerView={3}
        onSlideChange={(sweper) => setActiveIndex(sweper.realIndex)}>
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className='!flex relative transition-all bg-white rounded-3xl overflow-hidden perspective-1000'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`relative ${
                index === activeIndex ? "w-1/2" : "w-full"
              } h-full rounded-3xl overflow-hidden perspective-1000`}>
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                className='absolute top-0 left-0'
                priority
                fill
                style={{ objectFit: "cover" }}
                sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </motion.div>
            {index === activeIndex && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='p-5 w-1/2 flex flex-col justify-around gap-5 hover:scale-105'>
                <span className=''>
                  <VscQuote
                    size={90}
                    className='text-lightGray dark:text-dark-MediumGray'
                  />
                </span>
                <p>{testimonial.review}</p>
                <div className=''>
                  <h3 className='text-lg font-semibold'>{testimonial.name}</h3>
                  <div className='flex items-center gap-2'>
                    {[...Array(5)].map((_, i) =>
                      i < Math.floor(testimonial.rating) ? ( // نجمة ممتلئة
                        <AiFillStar
                          key={i}
                          size={20}
                          className='text-yellow-400'
                        />
                      ) : i < testimonial.rating ? ( // نجمة نصف ممتلئة
                        <FaStarHalfAlt
                          key={i}
                          size={20}
                          className='text-yellow-400'
                        />
                      ) : (
                        // نجمة فارغة
                        <AiOutlineStar
                          key={i}
                          size={20}
                          className='text-gray-400'
                        />
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            )}
            {index !== activeIndex && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='text-center absolute bottom-5 left-5'>
                <h4 className='text-lg font-semibold italic text-white'>
                  {testimonial.name}
                </h4>
              </motion.div>
            )}
          </SwiperSlide>
        ))}
        <>
          <motion.button
            type='button'
            onClick={handleNextClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='absolute top-5 left-[22%] z-50 p-4 flex justify-center items-center text-base font-medium outline-none bg-green-800 text-white rounded-full group-hover:bg-white group-hover:text-green-700 focus:ring-4 focus:ring-green-400 dark:focus:ring-green-600'>
            <ArrowLeft size={18} />
          </motion.button>

          <motion.button
            type='button'
            onClick={handlePrevClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='absolute bottom-5 right-[22%] z-50 inline-flex p-4 justify-center items-center text-base font-medium text-white rounded-full bg-green-800 
          group-hover:bg-white group-hover:text-green-700 focus:ring-4 focus:ring-green-400 dark:focus:ring-green-600'>
            <ArrowRight size={18} />
          </motion.button>
        </>
      </Swiper>
    </div>
  );
};

export default CustomerReviews;
