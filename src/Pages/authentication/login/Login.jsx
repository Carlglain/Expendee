import React, { useState } from 'react'
import Navbar from '../../../Components/Navbar'
import Sarah from '../../../assets/sarah.jpeg'
import {NavLink, Link } from 'react-router-dom'
function Login() {
    const [regSelected, setRegSelected] = useState(false)
  return (
    <div>
   
    <div className='flex h-screen justify-center lg:items-center space-x-4 text-black bg-black-600'>
        <div className='hidden lg:block bg-black px-20 py-1 w-1/2 h-full text-lg text-white'>
        <h1 className='font-bold text-[2.5rem] my-6'>Track Your Expenses Smarter</h1>
        <>Connect multiple mobile money platforms, analyze spending patterns, and get personalized insights to make better financial decisions.
        <br />
        <h2>Comprehensive Analytics</h2>
        Visualize your spending habits with interactive charts and detailed reports.

        <h2> Smart Categorization</h2>
        AI-powered transaction categorization that learns your spending habits.

        <h2>Custom Alerts</h2>
        Get notified about unusual spending or when you're approaching budget limits.
        </>
        <div className='bg-gray-900  p-2 pb-3  mt-10 rounded-medium text-black-500 w-150 rounded-md '>
            <div className='flex'>
                <img className='w-10 rounded-full px-1 h-10 mt-8' src={Sarah} alt="Sarah's picture" />
                <div className='mb-3'>
                    <h2>Sarah Johnson</h2>
                    <h3>Financial Analyst</h3>
                </div>
            </div>
            <p>This app has transformed how i manage my finances. the 
                insights from connecting all my accounts have helped me save over
                20% on monthly expenses.
            </p>
        </div>
        


        </div>
        <div className='lg:w-1/2 lg:ml-30 lg:mr-4 text-center'>
        <div className='text-center my-6'>{regSelected?"Create Your Account today with us":"Welcome Back" }</div>
            <div className='text-left ml-6 '>
            <button className='mr-4' onClick = {()=>{setRegSelected =>(regSelected =false)
            //console.log("clicked")
            }}>Login</button> 
            <button onClick={()=>{setRegSelected =>(regSelected =true)
            //console.log("clicked")

            }}>SignUp</button>
            </div>
            
           {/* Login */}
            <div className='text-left p-6 '>
            <label htmlFor="l1">Email address</label> <br />
            <input className='border  rounded-md w-80 mb-4 p-2 lg:w-md' id='l1' type="email" /> <br />
            <label htmlFor="l2">Password</label>  <Link>forgot password?</Link><br />
            <input className='border rounded-md w-80 mb-4 p-2 lg:w-md' id='l2' type="password" /> <br />
            <input id='l3' type="checkbox" /> <label htmlFor='l3'> Remember me for 30 days</label>
            </div>
            {/* registration */}
            <div>

            </div>
            <button className='btn1-styles '>{regSelected?"Sign Up":"Sign In"}</button>
            <div className="flex items-center justify-center w-screen lg:w-md my-6">
                <div className="border-t border-gray-300 w-1/2"></div>
                <span className="px-2 text-gray-500">or continue with</span>
                <div className="border-t border-gray-300 w-1/2"></div>
            </div>
            <button className='border border-black px-1 text-lg w-35 lg:w-50 rounded-md my-4 text-center p-2 mr-10 '>Google</button>
            <button className='border border-black px-1 text-lg w-35 lg:w-50 rounded-md my-1 text-center p-2'>Apple</button>
        </div>
    </div>
    </div>
  )
}

export default Login
