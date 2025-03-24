/** @format */

import Image from "next/image";
import React from "react";
import FormSignIn from "../organisms/FormSignIn";

const SignIn = () => {
  return (
    <div className='w-full h-[calc(100vh-72px)] flex items-center'>
      <div className='w-1/2 h-full flex justify-center items-center'>
        <FormSignIn />
      </div>
      <div className='relative w-1/2 h-full'>
        <Image src={"/images/signInImg.jpg"} alt='sign in img' fill priority />
      </div>
    </div>
  );
};

export default SignIn;
