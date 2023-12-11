import React, { useContext } from 'react'
import '../../src/App.scss'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { AuthContext } from '../context/AuthProvider'
import LoadingSpinner from '../components/loadingSpinner/LoadingSpinner'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Main = () => {
  const { isLoading } = useContext(AuthContext)
  return (
    <>
      <div className='bg-prigmayBG'>

        {
          isLoading
            ? <LoadingSpinner className='load' />
            : <div>
              <Header />
              <Outlet />
              <Footer />
            </div>
        }
        <ToastContainer className="z-50" />
      </div >

    </>
  )
}

export default Main
