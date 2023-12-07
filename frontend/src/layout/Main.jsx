import React, { useContext } from 'react'
import '../../src/App.scss'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { AuthContext } from '../context/AuthProvider'
import LoadingSpinner from '../components/loadingSpinner/LoadingSpinner'
const Main = () => {
  const { isLoading } = useContext(AuthContext)
  return (
    <>
      <div className='bg-prigmayBG'>
        {
          isLoading
            ? <LoadingSpinner />
            : <div>
              <Header />
              <Outlet />
              <Footer />
            </div>
        }
      </div >

    </>
  )
}

export default Main
