import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import {Routes, Route} from 'react-router-dom'
function App() {
  const [count , setCount] = useState(0)
  return (<div className='bg-black'>
    <Navbar />
    </div>
  )
}

export default App
