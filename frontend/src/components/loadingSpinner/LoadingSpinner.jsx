import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <span className="loading loading-ring loading-sm"></span>
      <span className="loading loading-ring loading-md"></span>
      <span className="loading loading-ring loading-lg"></span>
      <span className="loading loading-ring loading-md"></span>
    </div>
  )
}

export default LoadingSpinner
