import React, { useEffect, useState } from 'react'

import "./Dashboard.css"
const Dashboard = () => {

    const [localData, setLocalData] = useState({});
 


  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem("formData"));
    setLocalData(formData);
  }, [])
  return (
    <>
     <div className="dashboard-container">
      <h2 className="dashboard-title">Welcome to Your Dashboard</h2>
      <div className="dashboard-card">
        <p><span className="label">Name:</span> {localData.name}</p>
        <p><span className="label">Email:</span> {localData.email}</p>
        <p><span className="label">Address:</span> {localData.address}</p>
      </div>
    </div>
    </>
  )
}

export default Dashboard