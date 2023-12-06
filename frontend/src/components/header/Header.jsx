
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
const Header = () => {

  return (
    <>
      <header className='max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out'>
        <Navbar />
      </header>
    </>
  )
}

export default Header
