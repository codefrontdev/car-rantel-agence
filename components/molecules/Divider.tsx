/** @format */

"use client";
import React from "react";

interface DividerProps {
  text: string;
}

const Divider: React.FC<DividerProps> = ({ text }) => {
  return (
    <div className='text-xs flex text-center justify-center items-center w-full'>
      <div className='w-full h-[1px] bg-lightGray dark:bg-dark-MediumGray' />
      <span className='min-w-40 dark:text-dark-lightGray text-dark-MediumGray'>
        {text}
      </span>
      <div className='w-full h-[1px] bg-lightGray dark:bg-dark-MediumGray' />
    </div>
  );
};

export default Divider;
