import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Login from './Pages/authentication/login/Login'
import Home from './Pages/home/Home'
function App() {
  const [count , setCount] = useState(0)
  return (
    <>
    {/* <Navbar /> */}
    
    <Routes>
    <Route path='/' element = { <Home />} />
    <Route path='/registration' element = {<Login />} />
    </Routes>
    </>
  )
}

export default App
