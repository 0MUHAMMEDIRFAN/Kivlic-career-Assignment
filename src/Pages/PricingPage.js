import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Pricing from "../Components/Pricing"
function PricingPage() {
  return (
    <div>
      <Navbar currentNav="Pricing" />
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default PricingPage
