import React from "react";
import img from "../assets/icons/not.webp";

const Error = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <img src={img} alt='not found' className='max-w-full max-h-full' />
    </div>
  );
};

export default Error;
