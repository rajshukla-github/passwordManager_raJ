import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white  w-full flex flex-col justify-center items-center fixed bottom-0'>
        <div className="">
        <div className="logo font-bold text-xl">
          <span className='text-green-500'>&lt;</span>
          Pass
          <span className='text-green-500'>Manager/&gt;</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
      Work of  <img className='w-7 mx-2' src="images/rajshukla.png" alt="" />Raj Shukla
        </div>
    </div>
  )
}

export default Footer
