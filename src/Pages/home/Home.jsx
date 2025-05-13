import React from 'react'
import Navbar from '../../Components/Navbar'
import HeroSection from './HeroSection'
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import PaymentsIcon from '@mui/icons-material/Payments';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import PieChartIcon from '@mui/icons-material/PieChart';
import FeaturesSection from './FeaturesSection';
function Home() {
  return (
    <div className='bg-gray-50 h-full py-6 '>
      <HeroSection />
      <div className='bg-white h-40 my-10 '>
        <p className='text-center pt-4 tex-xl '>Trusted by users across these platforms</p>
        <div className='flex justify-around items-center mt-6'>
          <p className='flex flex-col lg:block'><SendToMobileIcon />MOMO</p>
          <p className='flex flex-col lg:block'><PaymentsIcon /> ORANGE MONEY</p>
          <p className='flex flex-col lg:block'><RequestQuoteIcon /> Paypal</p>
          <p className='flex flex-col lg:block'><RequestQuoteIcon /> Binance</p>
        </div>
      </div>
      <FeaturesSection />
     <Section />
    </div>
  )
}
const Section = ()=>{
  return(<div className='w-full bg-white h-auto pl-4 lg:p-18 my-30 text-xl text-center' >
     
        <h1 className='text-[3rem] my-4'>Your Complete Financial Dashboard</h1>
        <p>Get a holistic view of your finances with our intuitive and powerful dashboard.</p>
        <div className='bg-gray-900 p-7 lg:p-15 mt-10 h-100 rounded-md pt-4 lg:pt-30  lg:text-center  '>
          <p><PieChartIcon fontSize='large' sx={{color:'white'}}/></p>
          <p className='text-white text-[2rem] lg:text-[2.5rem] m-auto'>Interactive dashboard with spending analytics, transaction history, and financial insights</p>
        
        </div>
  
  </div>)
}
export default Home
