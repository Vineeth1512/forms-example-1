import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the App</h1>
      <p className="home-subtitle">Please login or sign up to continue</p>

      <div className="home-buttons">
        <Link to="/signup" className="home-btn signup">Signup</Link>
         <Link to="/login" className="home-btn login">Login</Link>
      </div>
    </div>
  )
}

export default Home
