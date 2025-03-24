/** @format */

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

interface FAQItemProps {
  item: {
    id: number;
    question: string;
    answer: string;
  };
  openFAQ: number | null;
  toggleFAQ: (id: number) => void;
}

export const FAQItem: React.FC<FAQItemProps> = ({
  item,
  openFAQ,
  toggleFAQ,
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null); // مرجع للزر

  const handleToggle = () => {
    toggleFAQ(item.id);
    buttonRef.current?.focus(); // إجبار التركيز على الزر عند الضغط على العنصر الأب
  };

  return (
    <div
      className={`p-6 group w-full hover:bg-green-700 ${
        openFAQ === item.id && "bg-green-700 text-white"
      } hover:text-white rounded-3xl border`}
      onClick={handleToggle}>
      <div className='flex justify-between items-center gap-4 cursor-pointer'>
        <h3 className='text-2xl line-clamp-2 flex-1'>{item.question}</h3>
        <button
          ref={buttonRef}
          type='button'
          className={`p-3 flex justify-center items-center text-base font-medium outline-none  ${
            openFAQ === item.id ? "bg-white text-green-700" : "text-white"
          } rounded-full bg-green-800 
          group-hover:bg-white group-hover:text-green-700 focus:ring-4 focus:ring-green-400 dark:focus:ring-green-600`}>
          {openFAQ === item.id ? (
            <ArrowUpRight size={18} />
          ) : (
            <ArrowDownRight size={18} />
          )}
        </button>
      </div>
      {openFAQ === item.id && (
        <p
          className={` group-hover:text-gray-100 ${
            openFAQ === item.id ? "text-gray-100" : "text-gray-600"
          } mt-3`}>
          {item.answer}
        </p>
      )}
    </div>
  );
};
