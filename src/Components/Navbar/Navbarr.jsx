import React from 'react'
import {Navbar ,Nav ,Container } from "react-bootstrap"
import { toast } from "react-toastify"

import {Link, useNavigate} from "react-router-dom"
import "./Navbar.css"

const Navbarr = ({isLogin,setIsLogin}) => {
  const navigate = useNavigate();
 

  const renderButton=()=>{
    console.log(isLogin);
    
    if(!isLogin){
      return<>  <Nav.Link  as={Link} to="/login">Login</Nav.Link></>
    }else{
      return<> <Nav.Link onClick={handleLogout}>Logout</Nav.Link></>
    }
  }

  
    const handleLogout = (e)=>{
      e.preventDefault();
      setIsLogin(false)
      localStorage.removeItem("isLogin");
      localStorage.removeItem("isLoggedIn");
      toast.success("Logout successfully.")
      setTimeout(()=>navigate('/login'),1000)
      
    }

  return (
    <>
     <Navbar sticky="top" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>RecipeHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
          
          <Nav.Link as={Link} to="/signup">SignUP</Nav.Link>
          {renderButton()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Navbarr