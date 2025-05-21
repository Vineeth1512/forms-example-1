import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import { toast, ToastContainer } from "react-toastify"
import { useNavigate, Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import './Signup.css' // <- Add this CSS file

export const Signup = () => {
  const [signupDetails, setSignupDetails] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    role:""
  })

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(signupDetails);

     let storedData = JSON.parse(localStorage.getItem("formData"));
  let allUsersData = Array.isArray(storedData) ? storedData : [];

  allUsersData.push(signupDetails);
  localStorage.setItem("formData", JSON.stringify(allUsersData));
    toast.success("Signed Up Successfully")
    setTimeout(() => navigate('/login'), 1500);
  }

  return (
    <>
      <div className="signup-container">
        <h2 className="signup-title">Create Account</h2>
        <Form
         onSubmit={handleSubmit}
         
         className="signup-form">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Name"
              onChange={(e) => setSignupDetails({ ...signupDetails, name: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"
              onChange={(e) => setSignupDetails({ ...signupDetails, email: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"
              onChange={(e) => setSignupDetails({ ...signupDetails, password: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address"
              onChange={(e) => setSignupDetails({ ...signupDetails, address: e.target.value })}
            />
          </Form.Group>
          <Form.Select aria-label="Default select example"
            onChange={(e) => setSignupDetails({ ...signupDetails, role: e.target.value })}
            >
      <option>Choose the Role</option>
      <option value="patient">Patient</option>
      <option value="donor">Donor</option>
      
    </Form.Select>

          <Button variant="primary" type="submit" className="w-100">
            Sign Up
          </Button>

          <p className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </Form>
      </div>

      <ToastContainer />
    </>
  )
}
