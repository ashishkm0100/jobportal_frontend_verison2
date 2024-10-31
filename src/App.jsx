import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import Jobs from './components/Jobs'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Navbar/> 
    <Routes>
     <Route path='/' element={<Login/>}/>
     <Route path='/jobs' element={<Jobs/>}/>
     <Route path='/sign' element={<Signup/>}/>
     <Route path='/home' element={<Home/>}/>
     
     </Routes>
     </>
  )
}

export default App
