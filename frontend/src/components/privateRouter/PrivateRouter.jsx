import React, { Children, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom'

import LoadingSpinner from '../loadingSpinner/LoadingSpinner'
const PrivateRouter = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext)
  const location = useLocation();

  if (isLoading) {
    return (
      <LoadingSpinner />
    )
  }
  if (user) {
    return (
      <> {children} </>

    )
  }
  return (
    <Navigate
      replace
      to='/signup'>
      state={{ from: location }}
    </Navigate>
  )
}

export default PrivateRouter
