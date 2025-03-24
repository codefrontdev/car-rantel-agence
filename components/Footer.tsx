/** @format */

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className='bg-black p-14 h-fit  mt-44'>
      <div className='flex flex-col lg:flex-row gap-10 w-full  bg-emerald-600 rounded-3xl'>
        <div className='w-full lg:w-[600px] h-full flex flex-col gap-10 lg:text-start text-center items-center lg:items-start justify-between p-14'>
          <h2 className='text-3xl font-semibold capitalize text-white'>
            Drive your dream car today!
          </h2>
          <p className='text-lg font-normal text-white mt-4'>
            Whether you' re looking to buy or rent, we have the perfect car
            waiting for you. Browse our extensive selection and get behind the
            wheel with ease.
          </p>
          <div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0'>
            <Link
              href='#'
              className='inline-flex justify-center items-center py-3 px-14 text-base font-medium text-center text-green-700 hover:text-white rounded-full bg-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900'>
              Browse Cars
            </Link>
            <Link
              href='#'
              className='py-3 px-14 sm:ms-4 text-sm text-white font-medium focus:outline-none bg-transparent rounded-full border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
              Contact Us
            </Link>
          </div>
        </div>
        <div className='flex-1 min-w-36 relative min-h-96'>
          <Image
            src='/images/heroImg.png'
            alt='hero'
            fill
            priority
            style={{ objectFit: "contain" }}
            sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
      </div>
      <footer className=' '>
        <div className='mx-auto w-full max-w-screen-2xl px-4 pt-6 lg:pt-8'>
          <div className='flex flex-col lg:flex-row items-center text-center md:justify-between gap-5'>
            <div className='mb-6 md:mb-0 max-w-72'>
              <h1 className='uppercase text-5xl font-bold text-green-700'>
                Luxed
              </h1>
              <p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
                We are dedicated to providing the best car buying and renting
                experience, offering a wide range of high-quality vehicles with
                excellent customer service.
              </p>
            </div>
            <div className='flex flex-col lg:flex-row justify-between gap-20'>
              <div className='text-gray-500 dark:text-gray-400 max-w-60'>
                <h2 className='mb-6 text-sm font-semibold uppercase'>
                  information
                </h2>
                <ul className='text-gray-500 lg:text-start dark:text-gray-400 font-medium'>
                  <li className='mb-4'>
                    <Link href='#' className='hover:underline'>
                      Cars For sale
                    </Link>
                  </li>
                  <li className='mb-4'>
                    <Link href='#' className='hover:underline'>
                      Cars For Rent
                    </Link>
                  </li>
                  <li className='mb-4'>
                    <Link href='#' className='hover:underline'>
                      Financing
                    </Link>
                  </li>
                  <li className='mb-4'>
                    <Link href='#' className='hover:underline'>
                      About Us
                    </Link>
                  </li>
                  <li className='mb-4'>
                    <Link href='#' className='hover:underline'>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='text-gray-500 dark:text-gray-400 max-w-60'>
                <h2 className='mb-6 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase'>
                  Contact
                </h2>
                <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                  <li className='mb-4'>
                    <Link href='#' className='hover:underline flex'>
                      <span className='mr-2 p-3 rounded-full bg-gray-900 '>
                        <Phone size={14} className='text-green-600' />
                      </span>
                      +1 234 567 890
                    </Link>
                  </li>
                  <li className='mb-4'>
                    <Link href='#' className='hover:underline flex'>
                      <span className='mr-2 w-10 h-10 p-3 rounded-full bg-gray-900 '>
                        <MapPin size={14} className='text-green-600' />
                      </span>
                      73 Main Street, 5th block New York City
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='text-gray-500 dark:text-gray-400 max-w-60'>
                <h2 className='mb-6 text-sm font-semibold uppercase'>
                  SOCIAL MEDIA
                </h2>
                <ul className='text-gray-500 lg:text-end dark:text-gray-400 font-medium'>
                  <li className='mb-4'>
                    <Link href='#' className='hover:underline'>
                      Instagram
                    </Link>
                  </li>
                  <li className='mb-4'>
                    <Link href='#' className='hover:underline'>
                      Facebook
                    </Link>
                  </li>
                  <li className='mb-4'>
                    <Link href='#' className='hover:underline'>
                      Twitter
                    </Link>
                  </li>
                  <li className='mb-4'>
                    <Link href='#' className='hover:underline'>
                      LinkedIn
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className='mt-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mt-8' />
          <div className='sm:flex sm:items-center sm:justify-between mt-6 text-gray-500 dark:text-gray-400'>
            <span className='text-sm sm:text-center'>
              © 2023{" "}
              <a href='https://flowbite.com/' className='hover:underline'>
                Flowbite™
              </a>
              . All Rights Reserved.
            </span>
            <Link href={"#"}>Terms Of Service</Link>
            <Link href={"#"}>Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
