"use client";
import React from 'react'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
      <section className="text-black body-font  bg-slate-400 bg-fixed ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
        I am
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['Web Developer'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <div className='w-[100px] h-[2px] bg-blue-700'></div>
      <p className="mb-8 leading-relaxed">
      I am a passionate and detail-oriented individual with a keen interest in web develpment,technology and innovation.I am currently enrolled in Governor Sindh IT course "Web 3.0, Metaverse and Artificial Intelligence".
      I am eager to apply  my learning skills in real-world project.
      </p>
      <div className="flex justify-center">
      <Link href={"#contact"}>
        <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
         Contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-80 md:w-1/2 w-5/6">
  <Image className='object-cover object-center rounded'
  alt='Hero'
  src={require("../../../public/image.png")}
  height={400}
  width={400}/>
    </div>
  </div>
</section>
  )
}

export default Hero