import React from 'react'
import Navbar from '../Components/Navbar'
import Login from '../Components/Login'

function EmailLoginPage() {
  return (
    <>
      <Navbar currentNav="Login"/>
      <Login/>
    </>
  )
}

export default EmailLoginPage
