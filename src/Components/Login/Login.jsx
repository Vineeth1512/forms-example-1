import React, { useEffect, useState } from 'react'
import { Form, Button } from "react-bootstrap"
import { useNavigate, Link } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify"
import "./Login.css"

const Login = ({isLogin,setIsLogin}) => {
  const [localData, setLocalData] = useState([]);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem("formData"));
    setLocalData(formData);
  }, [])

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(localData);

    const matchedUser = localData.find((x)=>x.email===loginDetails.email && x.password===loginDetails.password);
    console.log(matchedUser);
    console.log(isLogin);
    
localStorage.setItem("isLogin", "true");
setIsLogin(true);

    
    

if (!loginDetails.email || !loginDetails.password) {
    toast.warning("Please fill all fields");
    return;
  }



    if (matchedUser) {
      localStorage.setItem("isLogin", JSON.stringify(matchedUser))
      toast.success("Logged in Successfully");
      setTimeout(() => navigate('/dashboard'), 1500);
    } else {
      toast.error("Invalid Email or Password");
      setLoginDetails({ email: "", password: "" });
    }
  }

  return (
    <>
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <Form onSubmit={handleLogin} className="login-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"
              value={loginDetails.email}
              onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"
              value={loginDetails.password}
              onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>

          <p className="signup-link">
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </Form>
      </div>

      <ToastContainer />
    </>
  )
}

export default Login
