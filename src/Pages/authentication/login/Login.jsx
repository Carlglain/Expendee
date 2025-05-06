import React from 'react'
import Navbar from '../../../Components/Navbar'
import Sarah from '../../../assets/sarah.jpeg'
import {NavLink, Link } from 'react-router-dom'
function Login() {
    const [regSelected, setRegSelected] = useCase(false)
  return (
    <div>
   
    <div className='flex justify-center items-center space-x-4 text-black bg-black-600'>
        <div className='hidden lg:block bg-gray-100 px-20 py-1 w-1/2 h-full'>
        <h1 className='font-bold'>Track Your Expenses Smarter</h1>
        <>Connect multiple mobile money platforms, analyze spending patterns, and get personalized insights to make better financial decisions.
        <br />
        <h2>Comprehensive Analytics</h2>
        Visualize your spending habits with interactive charts and detailed reports.

        <h2> Smart Categorization</h2>
        AI-powered transaction categorization that learns your spending habits.

        <h2>Custom Alerts</h2>
        Get notified about unusual spending or when you're approaching budget limits.
        </>
        <div className='bg-white mt-3 rounded-medium text-black-500 w-100 rounded-md '>
            <div className='flex'>
                <img className='w-10 rounded-full px-1 h-10 mt-2' src={Sarah} alt="Sarah's picture" />
                <div className='mb-3'>
                    <h2>Sarah Johnson</h2>
                    <h3>Financial Analyst</h3>
                </div>
            </div>
            <p>"This app has transformed how i manage my finances. the 
                insights from connecting all my accounts have helped me save over
                20% on monthly expenses."
            </p>
        </div>
        


        </div>
        <div className='lg:w-1/2 lg:ml-15 mr-4 text-center'>
            <button onClick = {()=>{

            }}>Login</button> 
            <button onClick={()=>{

            }}>SignUp</button>
            <br />
            <button className='btn1-styles '>Continue with Google</button>
            <br />
            <button className='btn1-styles'>Continue with Apple</button>
            <div className="flex items-center justify-center w-full">
                <div className="border-t border-gray-300 w-1/2"></div>
                <span className="px-4 text-gray-500">or</span>
                <div className="border-t border-gray-300 w-1/2"></div>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Login
