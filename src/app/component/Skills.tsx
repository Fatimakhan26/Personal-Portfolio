import React from 'react'
import { CiSquareCheck } from "react-icons/ci";

const Skills = () => {
  return (
    <div id='Skills'>
      <section className="text-black body-font bg-slate-400">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-black">
      My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-[5rem] -mb-[5rem]">
    {/* Skills */}
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
            <CiSquareCheck className='text-xl font-bold'/>
            </div>
            <h2 className="text-black text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
           <div className='relative h-1 w-full bg-white rounded-xl'>
            <div className='absolute bg-blue-500 h-1 rounded-xl w-[80%]'> </div>
            <p className='font-bold text-blue-900 text-right '>
            90%
            </p>

           </div>
            
          </div>
        </div>
      </div>

       {/* Skills */}
       <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
            <CiSquareCheck className='text-xl font-bold'/>
            </div>
            <h2 className="text-black text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
           <div className='relative h-1 w-full bg-white rounded-xl'>
            <div className='absolute bg-blue-500 h-1 rounded-xl w-[75%]'> </div>
            <p className='font-bold text-blue-900 text-right '>
            80%
            </p>

           </div>
            
          </div>
        </div>
      </div>

       {/* Skills */}
       <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
            <CiSquareCheck className='text-xl font-bold'/>
            </div>
            <h2 className="text-black text-lg title-font font-medium">
              Typescript
            </h2>
          </div>
          <div className="flex-grow">
           <div className='relative h-1 w-full bg-white rounded-xl'>
            <div className='absolute bg-blue-500 h-1 rounded-xl w-[90%]'> </div>
            <p className='font-bold text-blue-900 text-right '>
            80%
            </p>

           </div>
            
          </div>
        </div>
      </div>

      

      
     
    </div>
  </div>
</section>

    </div>
  )
}

export default Skills