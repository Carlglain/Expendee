import React from 'react'
import Logo from '../assets/image1Logo.png'

function Navbar() {
  return (
    <nav className='top-0 sticky text-white w-full h-15 py-3 bg-black'>
        <div className='container text-sm px-4 mx-auto relative'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-1'>
                    <img src={Logo} alt="Expendee logo" className='h-6 w-8' />
                    <span className='text-xl font-semibold font-poppins'>Expendee</span>
                </div>
                <div>

                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
