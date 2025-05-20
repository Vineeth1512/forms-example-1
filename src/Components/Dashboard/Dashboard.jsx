import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from "react-toastify"

import "./Dashboard.css"
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {

    const [localData, setLocalData] = useState([]);
 const navigate = useNavigate();


  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem("isLogin"));
    setLocalData(formData);
  }, [])


  // const handleLogout = (e)=>{
  //   e.preventDefault();
  //   localStorage.removeItem("isLogin");
  //   toast.success("Logout successfully.")
  //   setTimeout(()=>navigate('/login'),1000)
    
  // }
  return (
    <>
     <div className="dashboard-container">
      <h2 className="dashboard-title">Welcome to Your Dashboard</h2>
      <div className="dashboard-card">
        <p><span className="label">Name:</span> {localData.name}</p>
        <p><span className="label">Email:</span> {localData.email}</p>
        <p><span className="label">Role:</span> {localData.role}</p>
        <p><span className="label">Address:</span> {localData.address}</p>

        {/* <button onClick={handleLogout}>Logout</button> */}
      </div>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Dashboard