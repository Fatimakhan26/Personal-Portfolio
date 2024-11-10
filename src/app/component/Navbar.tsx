import React from 'react'
import Link from 'next/link'
import { AiOutlineCloudDownload } from 'react-icons/ai'


const Navbar = () => {
  return (
    <div className='bg-blue-900 z-50 sticky top-0'>
      <header className="text-white font-semibold body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        
      <span className="ml-3 text-4xl">Fatima Khan</span>
    </a>
    <nav className="md:ml-auto md:mr-auto text-2xl flex flex-wrap items-center  justify-center">
      <Link  href={"/"} className="mr-5 hover:text-white">Home</Link>
      <Link  href={"#About"}className="mr-5 hover:text-white">About</Link>
      <Link href={"#Skills"}className="mr-5 hover:text-white">Skills</Link>
      <Link href={"#project"}className="mr-5 hover:text-white">Projects</Link>
      <Link href={"#contact"}className="mr-5 hover:text-white">Contacts</Link>
    </nav>
  </div>
</header>
    </div>
  )
}

export default Navbar