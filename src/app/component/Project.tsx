import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Project = () => {
  return (
    <div id='project'>
    <section className="text-black body-font bg-slate-400">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">
        My Projects
      </h1>
    </div>
    <div className="flex flex-wrap -m-5 -mt-[5rem]">
        {/*projects*/}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center bg-slate-400"
            src={require('../../../public/image1.jpg')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-700 mb-1">
             Analog clock project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Analog clock
            </h1>
            <p className="leading-relaxed line-clamp-4">
              Analog clock made by using HTMl, CSS and Javascript.click on the link button to see this clock
            </p>
            <Link target='_blank' href={"https://analog-clock-two-inky.vercel.app/"}> 
            <p className=" text-blue-700 hover:underline leading-relaxed">Click to view project</p>
            </Link>
          </div>
          
        </div>
      </div>

        {/*projects*/}
        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center bg-slate-400"
            src={require('../../../public/image2.jpg')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-700 mb-1">
             Calculator project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Simple Calculator
            </h1>
            <p className="leading-relaxed line-clamp-4">
              Simple calculator made by using Html, CSS and Javascript. use this calculator to do  simple calculations.
            </p>
            <Link target='_blank' href={"https://calculator-seven-iota-42.vercel.app/"}> 
            <p className=" text-blue-700 hover:underline leading-relaxed">Click to view project</p>
            </Link>
          </div>
          
        </div>
      </div>

       {/*projects*/}
       <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center bg-slate-400"
            src={require('../../../public/image3.jpg')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-700 mb-1">
            Mini Calendar Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Mini Calendar
            </h1>
            <p className="leading-relaxed line-clamp-4">
              This is a calendar made by using HTML,CSS and JS.Check this project by
              clicking on the link below.
            </p>
            <Link target='_blank' href={"https://mini-calendar-silk.vercel.app/"}> 
            <p className=" text-blue-700 hover:underline leading-relaxed">Click to view project</p>
            </Link>
          </div>
          
        </div>
      </div>


      
    </div>
  </div>
</section>

    </div>
  )
}

export default Project