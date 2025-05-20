import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Signup } from './Components/SignUp/Signup'
import Login from './Components/Login/Login'
import Navbarr from './Components/Navbar/Navbarr'
import Dashboard from './Components/Dashboard/Dashboard'
import Home from './Components/Home/Home'

const App = () => {
  const [isLogin , setIsLogin] = useState(localStorage.getItem("isLoggedIn")==="true");

  useEffect(()=>{
    localStorage.setItem("isLoggedIn",isLogin)
  },[isLogin])
  return (
  <>

<Navbarr isLogin ={isLogin} setIsLogin={setIsLogin}/>
  <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/login' element={<Login   isLogin ={isLogin} setIsLogin={setIsLogin} />} />
    <Route path='/dashboard' element={isLogin? <Dashboard/>:<Navigate to={'/login'}/>} />
  </Routes>
  </>
  )
}

export default App