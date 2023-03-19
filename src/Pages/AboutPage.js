import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import About from "../Components/About"

function AboutPage() {
  return (
    <div>
      <Navbar currentNav="AboutUs"/>
      <About/>
      <Footer/>
    </div>
  )
}

export default AboutPage
