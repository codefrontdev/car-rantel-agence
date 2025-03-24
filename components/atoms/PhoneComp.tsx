'use client'
import { Phone } from 'lucide-react'
import { useLocale } from 'next-intl'
import React from 'react'

const PhoneComp = () => {
  
  const locale = useLocale()
  return (
    <div  dir={locale === "ar" ? "rtl" : "ltr"} className={`flex gap-2 items-center ${""}`}>
    <Phone size={16} className={`${locale === "ar" ? "rotate-[-100deg]" : ""}`} />
    <span>+1 (123) 456-7890</span>
  </div>
  )
}

export default PhoneComp