import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Signup } from './Components/SignUp/Signup'
import Login from './Components/Login/Login'
import Navbarr from './Components/Navbar/Navbarr'
import Dashboard from './Components/Dashboard/Dashboard'
import Home from './Components/Home/Home'

const App = () => {
  return (
  <>

<Navbarr/>
  <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
  </Routes>
  </>
  )
}

export default App