/** @format */
"use client";

import { useState } from "react";
import { FAQItem } from "./FAQItem";


export const FAQList = () => {
  const questions = [
    {
      id: 1,
      question: "How can I buy a car from your website?",
      answer:
        "Simply browse our selection of cars for sale, select the one that fits your needs, and follow the steps to complete the purchase online. Our team is here to assist if you need help.",
    },
    {
      id: 2,
      question: "What are the rental terms for cars?",
      answer:
        "Rental terms vary depending on the car model and rental period. You will need a valid driver's license, a security deposit, and proof of insurance.",
    },
    {
      id: 3,
      question: "Do you offer financing options?",
      answer:
        "Yes, we offer flexible financing options through our trusted partners. You can choose from different payment plans based on your budget.",
    },
    {
      id: 4,
      question: "Can I test drive a car before purchasing?",
      answer:
        "Yes, you can schedule a test drive at any of our dealership locations. Contact us to book an appointment.",
    },
    {
      id: 5,
      question: "What documents do I need to rent a car?",
      answer:
        "To rent a car, you typically need a valid driver's license, a credit card for the deposit, and proof of insurance.",
    },
  ];
  
  const [openFAQ, setOpenFAQ] = useState<number | null>(1); // بدءًا بالسؤال الأول مفتوحًا

  const toggleFAQ = (id: number) => {
    console.log(id);
    setOpenFAQ(openFAQ === id ? null : id); // عند النقر على السؤال نفسه مرة أخرى يتم إغلاقه
  };

  return (
    <div className='flex flex-col w-[95%] lg:w-1/2 gap-4 '>
      {questions.map((item) => (
        <FAQItem
          key={item.id}
          item={item}
          openFAQ={openFAQ}
          toggleFAQ={toggleFAQ}
        />
      ))}
    </div>
  );
};
