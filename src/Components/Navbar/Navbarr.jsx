import React from 'react'
import {Navbar ,Nav ,Container } from "react-bootstrap"

import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbarr = () => {
 


  return (
    <>
     <Navbar sticky="top" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>RecipeHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
          
          <Nav.Link as={Link} to="/signup">SignUP</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Navbarr