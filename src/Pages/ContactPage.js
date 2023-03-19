import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Contact from "../Components/Contact"
function ContactPage() {
  return (
    <div>
      <Navbar currentNav="Contact" />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default ContactPage
