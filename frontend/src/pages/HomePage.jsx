
import React from 'react'
import Banner from '../components/banner/Banner'
import Categories from '../components/categories/Categories'
import SpeciaDishes from '../components/speciaDishes/SpeciaDishes'
import Testimonials from '../components/testimonials/Testimonials'
import OurServices from '../components/ourServices/OurServices'

const HomePage = () => {
  return (
    <>
      <Banner />
      <Categories />
      <SpeciaDishes />
      <Testimonials />
      <OurServices />
    </>
  )
}

export default HomePage
