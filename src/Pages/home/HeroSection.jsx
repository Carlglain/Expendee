import React from 'react'
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { Link } from 'react-router-dom';
function HeroSection() {
  return (
    <div className='text-lg'>
    
      <h1 className='font-bold text-[2rem] lg:text-[4rem] text-center mb-6'>Smart Expense Tracking Across All Your Mobile Money Platforms</h1>
      <p className='lg:hidden'><WhereToVoteIcon />Gain complete visibility into your spending habits with our AI-powered analytics.
   <br /><WhereToVoteIcon /> Connect all your accounts,
   <br /><WhereToVoteIcon />automate categorization, 
   <br /><WhereToVoteIcon />and make smarter financial decisions.</p>
    
    
    <p className='hidden lg:block text-center text-xl'>Gain complete visibility into your spending habits with our AI-powered analytics. Connect all your accounts,automate categorization, and make
smarter financial decisions.</p>
<div className='my-4'>
    <Link to='/registration'>Get Started for free</Link>
<Link> <PlayCircleFilledIcon /> See how it works</Link>
</div>
    </div>
  )
}

export default HeroSection
