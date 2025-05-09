import React from 'react'
import Navbar from '../../Components/Navbar'
import HeroSection from './HeroSection'

function Home() {
  return (
    <div className='bg-gray-50 h-screen py-6 px-6'>
      <HeroSection />
      <div className='bg-white h-50 my-10'>
        <h2>Trusted by users across these platforms</h2>
        <div>
          <p>MTN MOMO</p>
          <p>ORANGE MONEY</p>
          <p>Paypal</p>
          <p>Binance</p>
        </div>
      </div>

    </div>
  )
}

export default Home
