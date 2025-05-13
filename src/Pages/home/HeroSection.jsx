import React from 'react'
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import SyncLockIcon from '@mui/icons-material/SyncLock';
import { Link } from 'react-router-dom';
function HeroSection() {
  return (
    <div className='flex flex-col lg:flex-row text-xl space-x-4 space-y-10 lg:px-6 '>
        <div className=' lg:w-1/2 w-screen '>
        
            <h1 className='font-bold text-[2rem] lg:text-[4rem] mb-6 text-center lg:text-left '>Smart Expense Tracking Across All Your Mobile Money Platforms</h1>
            <p className='lg:hidden'><WhereToVoteIcon />Gain complete visibility into your spending habits with our AI-powered analytics.
            <br /><WhereToVoteIcon /> Connect all your accounts,
            <br /><WhereToVoteIcon />automate categorization, 
            <br /><WhereToVoteIcon />and make smarter financial decisions.</p>
        
        
            <p className='hidden lg:block text-xl'>Gain complete visibility into your spending habits with our AI-powered analytics. Connect all your accounts,automate categorization, and make
            smarter financial decisions.</p>
            <div className='my-10 flex flex-col items-center lg:block '>
            <span className='border rounded-md p-4 text-center my-2 mr-6 text-white bg-gray-900'> <Link to='/registration'>Get Started for free</Link> </span>
            <Link> <PlayCircleFilledIcon /> See how it works</Link>
            </div>
            <p><SyncLockIcon /> Bank-level security with 256-bit encryption </p>
        </div>
        <div className="lg:w-1/2 lg:flex lg:items-center block">
            <div className="bg-white p-8 rounded-md shadow-md"> 
                <Link
                className="bg-gray-900 text-white p-4 rounded-md hover:bg-gray-700 transition duration-300 block"  
                >
                Dashboard visualization showing expense analytics and transaction data
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
