import React from 'react'
import Navbar from '../../Components/Navbar'
import HeroSection from './HeroSection'
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import PaymentsIcon from '@mui/icons-material/Payments';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
function Home() {
  return (
    <div className='bg-gray-50 h-screen py-6 px-6'>
      <HeroSection />
      <div className='bg-white h-50 my-10'>
        <h2 className='text-center pt'>Trusted by users across these platforms</h2>
        <div className='flex justify-around items-center mt-6'>
          <p><SendToMobileIcon /> MTN MOMO</p>
          <p><PaymentsIcon /> ORANGE MONEY</p>
          <p><RequestQuoteIcon /> Paypal</p>
          <p><RequestQuoteIcon /> Binance</p>
        </div>
      </div>

    </div>
  )
}

export default Home
