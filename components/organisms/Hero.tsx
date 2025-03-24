/** @format */
"use client";

// Imports
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormGetValues, UseFormSetValue } from "react-hook-form";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Select from "../atoms/Select";
import CustomDatePicker, { formatDate } from "../organisms/CustomDatePicker";
import { MapPin } from "lucide-react";
import { get } from "http";

// Type for location options
export type OptionType = { value: string; label: string };

// Locations data
const locations: OptionType[] = [
  {
    value: "yehud-monosson",
    label: "Yehud-Monosson, 4140 Parker Rd, Allentown, NM 31134",
  },
  { value: "tel-aviv", label: "Tel Aviv, 4140 Parker Rd, Allentown, NM 31134" },
  { value: "tamra", label: "Tamra, 1901 Thornridge Cir, Shiloh, HI 81063" },
  { value: "yavne", label: "Yavne, 4517 Washington Ave, Manchester, KY 39405" },
];

// Validation schema
const rentalSchema = z.object({
  pickupLocation: z.string().nonempty("pickupLocation is required"),
  dropoffLocation: z.string().nonempty("dropoffLocation is required"),
  pickupDate: z
    .union([z.string(), z.date()])
    .transform((val) => (typeof val === "string" ? new Date(val) : val))
    .refine((date) => date >= new Date(), {
      message: "Pickup date must be today or later",
    }),
  dropoffDate: z
    .union([z.string(), z.date()])
    .transform((val) => (typeof val === "string" ? new Date(val) : val))
    .refine((date) => date >= new Date(), {
      message: "Dropoff date must be today or later",
    }),
});

export type RentalFormData = z.infer<typeof rentalSchema>;

// Reusable Location Field Component
const LocationField = ({
  name,
  label,
  openField,
  setOpenField,
  setValue,
  getValue,
}: {
  name: keyof RentalFormData;
  label: string;
  openField: string | null;
  setOpenField: React.Dispatch<React.SetStateAction<string | null>>;
  setValue: UseFormSetValue<RentalFormData>;
  getValue: UseFormGetValues<RentalFormData>;
}) => {
  const handleLocationChange = (locale: OptionType) => {
    setValue(name, locale.value);
    setOpenField(null);
  };
  const locale = getValue(name);
console.log(locale);
  return (
    <div className='col-span-1'>
      <label className='block text-sm mb-1'>{label}</label>
      <Select
        lang={locations}
        isOpen={openField === name}
        setIsOpen={(isOpen) => setOpenField(isOpen ? name : null)}
        locale={locale?.toString() || null}
        changeLocale={handleLocationChange}
        placeholder='Choose Location'
        icon={<MapPin size={16} />}
      />
    </div>
  );
};

// Reusable Date Field Component
const DateField = ({
  name,
  label,
  register,
  errors,
  setValue,
  defaultValue
}: {
  name: keyof RentalFormData;
  label: string;
  register: any;
  errors: any;
  setValue: any;
  defaultValue?: Date | null;
}) => {
  const handleDateChange = (date: Date | null) => {
    if (date) {
      setValue(name, date, { shouldValidate: true });
    }
  };
  return (
    <div className='col-span-1'>
      <label className='block text-sm mb-1'>{label}</label>
      <CustomDatePicker
        name={name}
        register={register}
        errors={errors}
        setValue={setValue}
        defaultValue={defaultValue}
      />
      {errors[name] && (
        <span className='text-red-500 text-xs mt-1'>
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default function CarRentalSearch() {
  const [openField, setOpenField] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<RentalFormData>({
    resolver: zodResolver(rentalSchema),
    mode: "onChange",
  });

  const onSubmit = (data: RentalFormData) => {
    console.log("Form Data:", data);
  };
  console.log("Errors:", getValues());

  return (
    <div className='backdrop-blur-md bg-opacity-50 absolute -bottom-20 left-1/2 -translate-x-1/2 p-10 border-2 border-gray-100/10 dark:border-gray-400/10 rounded-lg shadow-black/10 dark:shadow-white/10 shadow-lg w-full max-w-6xl mx-auto'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='grid grid-cols-5 gap-4 items-center'>
        {/* Pickup Location */}
        <LocationField
          name='pickupLocation'
          label='Pickup Location'
          openField={openField}
          setOpenField={setOpenField}
          setValue={setValue}
          getValue={getValues}
        />

        {/* Dropoff Location */}
        <LocationField
          name='dropoffLocation'
          label='Dropoff Location'
          openField={openField}
          setOpenField={setOpenField}
          setValue={setValue}
          getValue={getValues}
        />

        {/* Pickup Date */}
        <DateField
          name='pickupDate'
          label='Pickup Date'
          defaultValue={getValues("pickupDate")}
          register={register}
          errors={errors}
          setValue={setValue}
        />

        {/* Dropoff Date */}
        <DateField
          name='dropoffDate'
          label='Dropoff Date'
          defaultValue={getValues("dropoffDate")}
          register={register}
          errors={errors}
          setValue={setValue}
        />

        {/* Search Button */}
        <div className='col-span-1 flex justify-center'>
          <button
            type='submit'
            className='bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition'>
            Show Cars
          </button>
        </div>
      </form>
    </div>
  );
}
