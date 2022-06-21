import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './AuthContext'

const RequereAuth = ({children}) => {

    const {isAuth} = useContext(AuthContext)
    
  if(!isAuth){
    return <Navigate to="/profile" />
  }

  return children;
}

export default RequereAuth