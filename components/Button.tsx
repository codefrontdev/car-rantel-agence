/** @format */

import React from "react";

interface ButtonProps {
  btntext: string;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({ btntext, className }) => {
  return (
    <button
      type='button'
      className={`mt-10 justify-center items-center py-3 px-10 text-base font-medium text-center text-white rounded-full bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900 ${className}`}>
      {btntext}
    </button>
  );
};

export default Button;
