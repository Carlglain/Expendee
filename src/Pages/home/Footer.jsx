import React, { useState } from 'react'
function Footer() {
    const [isfree, setIsfree] = useState(false)
  return (
    <div className='pt-8 bg-gray-700 mt-10 text-center text-xl text-gray-100'>
      <h1 className='text-white font-bold text-[2rem]'>Take Control of Your Finances Today</h1>
      <p>Join thousands of users who are making smarter financial decisions with Expendee. Start your free 14-day trial now.</p>
    <button onClick={handleClick0=()=>{
        setIsfree()
    }}>Start Free Trial</button>
    <button onClick={handleClick1}>Schedule Demo</button>
    </div>
  )
}

export default Footer
