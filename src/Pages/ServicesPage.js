import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Services from "../Components/Services"

function ServicesPage() {
  return (
    <div>
      <Navbar currentNav="Services" />
      <Services/>
      <Footer/>
    </div>
  )
}

export default ServicesPage
