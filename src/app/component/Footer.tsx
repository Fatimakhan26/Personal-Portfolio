import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { SiVercel } from "react-icons/si";
import Link from 'next/link';
const Footer = () => {
  return (
    <div className='bg-blue-900'>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
    
      <span className="ml-3 text-xl">Fatima Khan</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Fatima Khan
  
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link
       target="_blank"
       href= {"https://www.linkedin.com/in/fatima-khan-04a747268/"}
       className="text-white">
      <FaLinkedin className='text-3xl hover:text-blue-700' />
      </Link>
    </span>

    <span className="inline-flex sm:ml-5 sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link
       target="_blank"
       href= {"https://github.com/Fatimakhan26"}
       className="text-white">
      <FaSquareGithub  className='text-3xl hover:text-blue-700' />
      </Link>
    </span>

    <span className="inline-flex sm:ml-5 sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link
       target="_blank"
       href= {"https://vercel.com/fatimas-projects-54ff3ef0"}
       className="text-white">
      <SiVercel className='text-3xl hover:text-blue-700' />
      </Link>
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer