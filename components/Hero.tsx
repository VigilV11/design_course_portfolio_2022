import React from 'react';
import MintButton from './Hero/MintButton';
import NavDots from './Hero/NavDots';

export default function Hero() {
  return (
    <div className="container mt-16 flex justify-between items-center w-screen">
      <div className="flex flex-wrap md:flex-nowrap">
        <NavDots />
        <div className="flex flex-wrap lg:ml-28 justify-center md:justify-start max-w-xl mt-0 md:my-36 z-10">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl leading-tight md:leading-tight lg:leading-tight text-center md:text-left ">
            Building <br /> beautiful web experiences.
          </h1>
          <MintButton />
        </div>
        <img
          src="imgs/man.png"
          alt="Man"
          className="w-3/4 mt-12 md:absolute md:mt-0 right-0 mx-auto object-contain"
        />
      </div>
    </div>
  );
}
