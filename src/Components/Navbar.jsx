import React from 'react'
import Logo from '../assets/image1Logo.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <nav className='top-0 sticky text-black w-full h-15 py-3 bg-gray-50'>
        <div className='container text-sm px-4 mx-auto relative'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-1'>
                    <img src={Logo} alt="Expendee logo" className='h-6 w-8' />
                    <span className='text-xl font-semibold font-poppins'>Expendee</span>
                </div>
                <ul className='hidden lg:flex items-center '>
                  < li className='mx-4 navurl'><Link>Features <ArrowDropDownIcon /></Link></li>
                  < li className='mx-4 navurl'><Link>Intergrations <ArrowDropDownIcon /></Link></li>
                  < li className='mx-4 navurl'><Link>Pricing</Link></li>
                  < li className='mx-4 navurl'><Link>Help Center</Link></li>
                </ul>
                <ul className='hidden lg:flex items-center'>
                < li className='mx-4 navurl text-lg rounded-md bg-gradient-to-r px-3 form-orange-700 to-blue-500'><Link>Login</Link></li>
                < li className='mx-4 text-lg text-white px-4 navurl bg-black rounded-md  '><Link>Start Free Trial</Link></li>
                </ul>

            </div>
        </div>
    </nav>
  )
}

export default Navbar
