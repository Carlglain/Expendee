import React, { useEffect, useState } from 'react'
import Navbar from '../../../Components/Navbar'
import Sarah from '../../../assets/sarah.jpeg'
import {NavLink, Link } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
function Login() {
    const [regSelected, setRegSelected] = useState(false);
    const [renderSignUp, setRenderSignUp] = useState(false)
    useEffect(()=>{
        if(regSelected){
            setRenderSignUp(true)
        }
        else{
            setRenderSignUp(false)
        }
    },[regSelected])
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
        <div className='lg:w-1/2 lg:ml-30 lg:text-[1rem] lg:mr-4 text-center lg:text-left'>
        <div className='text-center lg:text-[2rem] font-bold  lg:text-left lg:ml-6 my-6'>{renderSignUp?"Create Your Account today with us":"Welcome Back" }</div>
            <div className='text-left ml-6 mb-1 lg:ml-6'>
                <button className='mr-6'  onClick = {()=>{setRegSelected(false)
                }}>Login</button> 
                {!renderSignUp && <div className="absolute left-3 top-40 w-15 lg:top-60 lg:h-0.9 lg:left-257 h-0.5 lg:left-257 lg:top-76  bg-red-700"></div>}
            
                <button  onClick={()=>{setRegSelected(true)}}>SignUp</button>
                {renderSignUp && <div className="absolute left-21 top-40 w-15 h-0.5 lg:left-275 lg:h-0.9 lg:top-48  bg-red-700"></div>}
            </div>
            <hr className='w-80 color-gray-50 ml-3 lg:ml-6'/>
        
            
           {/* Login */}
            <div className='text-left  p-6 '>
            {renderSignUp && <><label htmlFor="l0">Full Name</label> <br />
            <input className='border  rounded-md w-80 mb-4 p-2 lg:w-md' id='l0' type="text" /> <br /> </>}
            <label htmlFor="l1">Email address</label> <br />
            <input className='border  rounded-md w-80 mb-4 p-2 lg:w-md' id='l1' type="email" /> <br />
            {renderSignUp && <><label htmlFor="l">Phone</label> <br />
                <input className='border  rounded-md w-80 mb-4 p-2 lg:w-md' id='l' type="number" /> <br /> </>}
            <label htmlFor="l2" className='lg:mr-65'>Password</label>  <Link>forgot password?</Link><br />
            <input className='border rounded-md w-80 mb-4 p-2 lg:w-md' id='l2' type="password" /> <br />
            {renderSignUp && <><label htmlFor="l3">Confirm Password</label> <br />
                <input className='border  rounded-md w-80 mb-4 p-2 lg:w-md' id='l3' type="password" /> <br /> </>}
           {!renderSignUp && <> <input id='l3' type="checkbox" /> <label htmlFor='l3'> Remember me for 30 days</label> </>}
            
            </div>
            {/* registration */}
            <div>

            </div>
            <button className='btn1-styles lg:w-md'>{renderSignUp?"Sign Up":"Sign In"}</button>
            <div className="flex items-center justify-center w-screen lg:w-md my-6 lg:ml-6">
                <div className="border-t border-gray-300 w-1/2"></div>
                <span className="px-2 text-gray-500">or continue with</span>
                <div className="border-t border-gray-300 w-1/2"></div>
            </div>
            <button className='lg:ml-6 border border-black px-1 text-lg w-35 lg:w-50 rounded-md my-4 text-center p-2 mr-10  '><GoogleIcon /> Google</button>
            <button className='border border-black px-1 text-lg w-35 lg:w-50 rounded-md my-1 text-center p-2'><AppleIcon /> Apple</button>
        </div>
    </div>
    </div>
  )
}

export default Login
