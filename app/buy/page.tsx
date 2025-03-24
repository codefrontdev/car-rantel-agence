import Hero from '@/components/Hero';
import SearchInput from '@/components/SearchInput';
import React from 'react'

const page = () => {
  return (
    <>
      <Hero
        title={
          <>
            Car <span className='text-yellow-500'>Buying</span> Chaped to your
            life
          </>
        }
        img='/images/signInImg.jpg'
        component={<SearchInput />}
      />
    </>
  );
}

export default page