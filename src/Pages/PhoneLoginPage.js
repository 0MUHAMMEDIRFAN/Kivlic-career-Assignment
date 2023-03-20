import React from 'react'
import Navbar from '../Components/Navbar'
import PhoneLogin from '../Components/PhoneLogin'

function PhoneLoginPage() {
  return (
    <div>
      <Navbar currentNav="Login"/>
      <PhoneLogin/>
    </div>
  )
}

export default PhoneLoginPage
