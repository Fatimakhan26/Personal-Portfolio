import React from 'react'

const Contact = () => {
  return (
     <div id='contact' className='bg-slate-400'>
    <div className="lg:w-1/3 md:w-1/2 bg-slate-400 md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        CONTACT
      </h2>
    
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-black">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-black">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="phone number" className="leading-7 text-sm text-black">
          Phone Number
        </label>
        <input
          type="number"
          id="phone"
          name="phone"
          className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-black">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
       Send Message
      </button>
    
    </div>
    </div>
  )
}

export default Contact
