/** @format */

import { ChevronDown } from "lucide-react";
import React from "react";
import Option from "./Option";
import { OptionType } from "../organisms/Hero";

interface SelectProps {
  lang: OptionType[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  locale: string | null;
  changeLocale: (locale: OptionType) => void;
  placeholder?: string;
  icon?: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({
  lang,
  isOpen,
  setIsOpen,
  locale,
  changeLocale,
  icon,
  placeholder,
}) => {
  return (
    <div className='flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse'>
      <button
        type='button'
        className='inline-flex w-14 items-center font-medium justify-between px-2 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'
           onClick={() => setIsOpen(!isOpen)}>
        {icon && icon}
        {locale ? (
          <span className=''>{locale}</span>
        ) : (
          <span className='text-gray-800 dark:text-gray-400'>
            {placeholder}
          </span>
        )}
        <span>
          <ChevronDown size={16} />
        </span>
      </button>

      {isOpen && (
        
        <div
          className='z-50 w-full absolute right-0 top-5 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700'
          id='language-dropdown-menu'>
          <ul className='py-2 font-medium' role='none'> {lang.map((l: OptionType) => (
            <Option
              key={l.label}
              label={l.label}
              onClick={() => {
                changeLocale(l);
                setIsOpen(false);
              }}
            />
          ))}
        </ul>
        </div>
      )}
     
    </div>
  );
};

export default Select;
