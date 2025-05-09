import React, { useState } from 'react'
import Logo from '../assets/image1Logo.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Link} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
  const [open, setOpen] = useState(false)
  const MenuCustom = ()=>{
    return(
      <div className='flex lg:hidden flex-col w-70 bg-gray-50 rounded-md p-4 fixed top-15 text-center right-0 justify-center items-center '>
          <ul className='items-center space-y-2'>
            < li className='mx-4 navurl'><Link>Features <ArrowDropDownIcon /></Link></li>
            < li className='mx-4 navurl'><Link>Intergrations <ArrowDropDownIcon /></Link></li>
            < li className='mx-4 navurl'><Link>Pricing</Link></li>
            < li className='mx-4 navurl'><Link>Help Center</Link></li>
            
            < li className='mx-4 navurl text-lg rounded-md bg-gradient-to-r px-3 form-orange-700 to-blue-500'><Link to="/registration">Login</Link></li>
            < li className='mx-4 text-lg text-white px-4 navurl bg-black rounded-md  '><Link>Start Free Trial</Link></li>
           
          
          </ul>
      </div>
    )
  }
  return (
    <nav className='top-0 sticky text-black w-full h-20 py-4 bg-gray-50 text-lg lg:text-[2rem] border-b-2 border-gray-100 '>
        <div className='px-4 mx-auto relative'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-1'>
                    <img src={Logo} alt="Expendee logo" className='h-8 w-9' />
                    <span className='text-[1.5rem] font-semibold font-poppins'>Expendee</span>
                </div>
                <ul className='hidden lg:flex items-center '>
                  < li className='mx-4 navurl'><Link>Features <ArrowDropDownIcon /></Link></li>
                  < li className='mx-4 navurl'><Link>Intergrations <ArrowDropDownIcon /></Link></li>
                  < li className='mx-4 navurl'><Link>Pricing</Link></li>
                  < li className='mx-4 navurl'><Link>Help Center</Link></li>
                </ul>
                <ul className='hidden lg:flex items-center'>
                < li className='mx-4 navurl text-lg lg:text-[1.5rem] rounded-md bg-gradient-to-r px-3 form-orange-700 to-blue-500'><Link to="/registration">Login</Link></li>
                < li className='mx-4 text-lg lg:text-[1.5rem] text-white px-4 navurl bg-black rounded-md  '><Link>Start Free Trial</Link></li>
                </ul>
                <div className='lg:hidden md:flex justify-end flex-col text-black'>
                <button  onClick={()=>{setOpen(open=>!open)}}>
                  {open?<CloseIcon />: <MenuIcon />}
                </button>
                </div>
                {open && <MenuCustom />}
            </div>
          
        </div>
        
    </nav>
  )
}

export default Navbar
