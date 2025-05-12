import React from 'react'
import Navbar from '../../Components/Navbar'
import HeroSection from './HeroSection'
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import PaymentsIcon from '@mui/icons-material/Payments';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import FeaturesSection from './FeaturesSection';
function Home() {
  return (
    <div className='bg-gray-50 h-full py-6 px-6'>
      <HeroSection />
      <div className='bg-white h-40 my-10'>
        <p className='text-center pt-4 tex-xl '>Trusted by users across these platforms</p>
        <div className='flex justify-around items-center mt-6'>
          <p className='flex flex-col lg:block'><SendToMobileIcon />MOMO</p>
          <p className='flex flex-col lg:block'><PaymentsIcon /> ORANGE MONEY</p>
          <p className='flex flex-col lg:block'><RequestQuoteIcon /> Paypal</p>
          <p className='flex flex-col lg:block'><RequestQuoteIcon /> Binance</p>
        </div>
      </div>
      <FeaturesSection />

    </div>
  )
}

export default Home
