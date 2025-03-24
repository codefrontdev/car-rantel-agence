import React, { ReactNode } from 'react'
import Button from './Button';


interface TitleProps {
  title: ReactNode;
  paragraph: string;
  btntext: string;
}
const Title: React.FC<TitleProps> = ({title, paragraph, btntext}) => {
  return (
    <div className='flex sm:text-center text-start xl:text-center justify-center lg:justify-between items-center flex-wrap w-full'>
      <h2 className='text-5xl font-normal dark:text-white text-black max-w-[400px]'>
        {title} 
      </h2>
      <p className='text-base font-normal max-w-[450px]'>{paragraph}</p>
      <Button btntext={btntext} className='hidden lg:inline-flex' />
    </div>
  );
}

export default Title