import React from 'react'
import { Navigate } from 'react-router-dom'

const Auth = () => {
    const token = null
  return token ? <Outlet/> : <Navigate to="/login"/>
  
}

export default Auth