import React from 'react'
import Hero from '../organisms/Hero'

const Home = () => {
  
  return (
    <div className='w-full relative h-[calc(100vh-72px)] bg-[url("/images/hero.webp")] bg-cover bg-no-repeat bg-center'>
      <Hero />
    </div>
  );
}

export default Home