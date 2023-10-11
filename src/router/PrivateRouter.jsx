import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';


const PrivateRouter = () => {


  return useSelector((state) => state.authSlice.email) === "osman" ? (<Outlet/>):(<Navigate to="/login"/>)
  // <Login/>
}

export default PrivateRouter
