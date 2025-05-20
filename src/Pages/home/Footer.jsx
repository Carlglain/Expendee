import {useState } from 'react'
import TimelineIcon from '@mui/icons-material/Timeline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
function Footer() {
    const [isfree, setIsfree] = useState(true)
  return (<div>
    <div className='pt-8 bg-gray-700 mt-10 text-center text-xl text-[gray]'>
      <h1 className='text-white font-bold text-[2rem]'>Take Control of Your Finances Today</h1>
      <p>Join thousands of users who are making smarter financial decisions with Expendee. Start your free 14-day trial now.</p>
    <button onClick={()=>{
       setIsfree(true)
    }} className={`rounded-md text-xl w-xsm p-3 mx-6 my-10 hover:scale-110 ${isfree?'bg-white text-black':'text-white'}`}>Start Free Trial</button>
    <button onClick={()=>{
    setIsfree(false)
    }} className={`rounded-md text-xl border w-xsm p-3 mx-6 my-10 hover:scale-110 ${!isfree?'bg-white text-black':'text-white'}`}>Schedule Demo</button>
    </div>
    <div className='py-6 px-4 bg-gray-900 text-left  text-xl text-[gray] flex flex-wrap justify-left items-center gap-2'>
      <div className='w-full lg:flex-[1_1_20%] sm:w-1/2'>
        <h1 className='text-white text-xxl '> <TimelineIcon /> Expendee</h1>
        <p className='my-4'>Smart expense tracking and financial analytics for the modern consumer.</p>
        <p ><FacebookIcon /> <TwitterIcon /> <InstagramIcon /> <LinkedInIcon /> </p>
      </div>
      <div className='w-full lg:flex-[1_1_20%] sm:w-1/2' >
        <h1 className='text-white text-xxl '> Product</h1>
        <ul className='flex flex-col gap-2'>
                  < li className=' navurl hover:text-white mt-4'><Link>Feature </Link></li>
                  < li className=' navurl hover:text-white'><Link>Intergrations </Link></li>
                  < li className=' navurl hover:text-white'><Link>Pricing</Link></li>
                  < li className=' navurl hover:text-white'><Link>Security</Link></li>
                  < li className=' navurl hover:text-white'><Link>Updates</Link></li>
        </ul>

      </div>
      <div className='w-full lg:flex-[1_1_20%] sm:flex-[1_1_40%]'>
        <h1 className='text-white text-xxl '> Resources</h1>
        <ul className='flex flex-col gap-2'>
                  < li className=' navurl hover:text-white mt-4'><Link>Blog </Link></li>
                  < li className=' navurl hover:text-white'><Link>Help Center </Link></li>
                  < li className=' navurl hover:text-white'><Link>Community</Link></li>
                  < li className=' navurl hover:text-white'><Link>API Documentation</Link></li>
                  < li className=' navurl hover:text-white'><Link>Partners</Link></li>
        </ul>

      </div>
      <div className='w-full lg:flex-[1_1_20%] sm:w-1/2'>
        <h1 className='text-white text-xxl '> Company</h1>
        <ul className='flex flex-col gap-2'>
                  < li className=' navurl hover:text-white mt-4'><Link>About Us </Link></li>
                  < li className=' navurl hover:text-white'><Link>Careers </Link></li>
                  < li className=' navurl hover:text-white'><Link>Contact</Link></li>
                  < li className=' navurl hover:text-white'><Link>Privacy Policy</Link></li>
                  < li className=' navurl hover:text-white'><Link>Terms of Service</Link></li>
        </ul>

      </div>
    </div>
    </div>
  )
}

export default Footer
