/** @format */
"use client";
import React from "react";

interface Option {
  label: string;
  value: string;
}

interface InputProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  type:
    | "text"
    | "password"
    | "email"
    | "radio"
    | "checkbox"
    | "file"
    | "date" // ✅ إضافة نوع date
    | "time"; // ✅ إضافة نوع time
  options?: Option[];
  register?: any;
  className?: string;
  error?: string;
  defaultValue?: string | number | Date | null;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  placeholder,
  type = "text",
  options,
  name,
  className,
  register,
  error,
  defaultValue,
}) => {
  return (
    <div className={`w-full flex flex-col ${className}`}>
      {/* Label */}
      <label htmlFor={id} className='text-sm font-medium mb-1'>
        {label} <span className='text-red-500'>*</span>
      </label>

      {/* Radio or Checkbox */}
      {type === "radio" || type === "checkbox" ? (
        <div className='flex flex-col gap-2'>
          {options?.map((option) => (
            <label key={option.value} className='flex items-center gap-2'>
              <input
                {...register(name)}
                type={type}
                value={option.value}
                className='w-4 h-4'
              />
              {option.label}
            </label>
          ))}
        </div>
      ) : (
        // Date, Time, or Other Types
        <input
          {...register(name)}
          id={id}
          type={type}
          className={`bg-transparent h-10 ${
            type === "file" ? "p-1" : "p-4"
          } border-[.5px] rounded-lg outline-none border-lightGray dark:border-dark-MediumGray ${
            error ? "border-red-500" : ""
          }`}
          placeholder={placeholder}
          defaultValue={
            type === "date" || type === "time"
              ? defaultValue // ✅ استخدم القيمة الافتراضية كما هي
              : defaultValue
          }
          aria-invalid={!!error} // دعم إمكانية الوصول
        />
      )}

      {/* Error Message */}
      {error && (
        <span className='text-red-500 text-xs mt-1'>{error?.toString()}</span>
      )}
    </div>
  );
};

export default Input;
