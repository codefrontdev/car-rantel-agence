/** @format */
import React, { useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { differenceInCalendarDays, format } from "date-fns";
import { useLocale } from "next-intl";
import { ar, fr, enUS } from "date-fns/locale";
import { X } from "lucide-react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { RentalFormData } from "./Hero";

// Locale configurations
const locales = {
  ar: { ...ar, options: {} },
  fr: { ...fr, options: {} },
  en: { ...enUS, options: {} },
};

interface CustomDatePickerProps {
  name: keyof RentalFormData;
  register: UseFormRegister<RentalFormData>;
  errors: FieldErrors<RentalFormData>;
  setValue: UseFormSetValue<RentalFormData>;
  defaultValue?: Date | null;
}
// Format date for display
export const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short", // "Oct"
    day: "2-digit", // "12"
    year: "numeric", // "2023"
  });
};

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  name,
  register,
  errors,
  setValue,
  defaultValue,
}) => {
  const locale = useLocale();
  const [startDate, setStartDate] = useState<Date | null>(defaultValue || null);
  const [endDate, setEndDate] = useState<Date | null>(defaultValue || null);
  const [isOpen, setIsOpen] = useState(false);

  // Reset dates
  const resetDates = () => {
    setStartDate(null);
    setEndDate(null);
    setValue(name, ''); // Reset form field
  };

  // Calculate selected days count
  const getSelectedDaysCount = () =>
    startDate && endDate ? differenceInCalendarDays(endDate, startDate) + 1 : 0;

  // Handle date change
  const handleChange = ([start, end]: [Date | null, Date | null]) => {
    setStartDate(start);
    setEndDate(end);
  };



  // Register locale dynamically
  useEffect(() => {
    registerLocale(locale, locales[locale as keyof typeof locales]);
  }, [locale]);

  // Toggle dropdown visibility
  const toggleDropdown = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };


  return (
    <div className='relative flex flex-col gap-1'>
      {/* Trigger button */}
      <button
        type='button'
        className='w-full flex items-center gap-2 px-3 py-1 border border-gray-800 dark:border-gray-400 rounded-lg'
        onClick={() => setIsOpen(!isOpen)}>
        {defaultValue ? (
          name === "pickupDate" ? (
            <span>{format(startDate ?? new Date(), "dd-MM-yyyy")}</span>
          ) : (
            <span>{format(startDate ?? new Date(), "dd-MM-yyyy")}</span>
          )
        ) : (
          <span className='text-gray-800 dark:text-gray-400'>
            {formatDate(new Date())}
          </span>
        )}
      </button>

      {/* Dropdown content */}
      {isOpen && (
        <div className='absolute left-0 top-9 border border-gray-900 dark:border-gray-400 rounded-lg bg-white dark:bg-[#1e1e20] shadow-sm flex flex-col'>
          {/* Header */}
          <div className='flex justify-between items-center py-5 px-3'>
            <X onClick={() => setIsOpen(false)} size={16} />
            <span>{getSelectedDaysCount()} days</span>
            <button
              onClick={resetDates}
              type='button'
              className='text-blue-500'>
              Reset
            </button>
          </div>

          {/* Date picker */}
          <DatePicker
            locale={locales[locale as keyof typeof locales]}
            selected={startDate ?? new Date()}
            onChange={handleChange}
            monthsShown={2}
            startDate={startDate}
            endDate={endDate}
            inline
            selectsRange
            calendarClassName='!flex justify-between !m-0 !p-0'
          />

          {/* Footer */}
          <div className='flex justify-between items-end py-5 gap-14 px-3'>
            {/* Date inputs */}
            <div className='flex gap-5'>
              <Input
                register={register}
                error={errors?.pickupDate?.message}
                id='pickupDate'
                defaultValue={startDate && formatDate(startDate)}
                label='Pickup Date'
                className='max-w-32'
                type='text'
                name='pickupDate'
                placeholder='Oct, 12, 2023'
              />
              <span className='mt-5'>-</span>
              <Input
                register={register}
                error={errors?.dropoffDate?.message}
                id='dropoffDate'
                defaultValue={endDate && formatDate(endDate)}
                label='Dropoff Date'
                className='max-w-32'
                type='text'
                name='dropoffDate'
                placeholder='Oct, 12, 2023'
              />
            </div>

            {/* Action buttons */}
            <div className='flex gap-3'>
              <Button
                type='button'
                text='Cancel'
                className='w-full h-10 bg-dark-lightGray dark:bg-dark-accent'
                onClick={() => setIsOpen(false)}
              />
              <Button
                type='button'
                text='Apply'
                className='w-full h-10 bg-orange-500'
                onClick={() => {
                  console.log(name);
                  console.log(startDate, endDate);
                  
                  if (startDate instanceof Date && endDate instanceof Date) {
                    setValue("pickupDate", startDate);
                    setValue("dropoffDate", endDate);
                  }
                  setIsOpen(false);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
