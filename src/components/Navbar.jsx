import React from 'react'

const Navbar = () => {
  return (
    <nav  className='bg-slate-800 text-white '>
      <div className="myContainer flex justify-between items-center px-4 py-5 h-14">

        <div className="logo font-bold text-xl">
          <span className='text-green-500'>&lt;</span>
          Pass
          <span className='text-green-500'>Manager/&gt;</span>
          </div>
        <ul>
            {/* <li className='flex gap-4'>
                <a className='hover:font-bold' href="/">Home</a>
                <a className='hover:font-bold' href="#">About Us</a>
                <a className='hover:font-bold' href="#">Offering</a>
                <a className='hover:font-bold' href="#">Contact Us</a>
            </li> */}
        </ul>
        <button className="text-white bg-green-600 my-5  rounded-full flex  justify-between items-center">
          <img className ="invert w-10 p-1" src="images/githubTranLogo.png" alt="" />
          <span className='font-bold px-2'>GitHub</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
