import React
// , { useContext, useEffect } 
from 'react'
import Navbar from '../Components/Navbar'
import Account from '../Components/Account'
import Footer from '../Components/Footer'
// import { AuthContext } from '../store/Context'
// import { useNavigate } from 'react-router-dom'

function AccountPage() {
  // const { user } = useContext(AuthContext)
  // const navigate = useNavigate()
  // useEffect(() => {
    // user ? navigate("/Kivlic-career-Assignment/account") : navigate("/Kivlic-career-Assignment/login")
  // })
  return (
    <div>
      <Navbar currentNav="Account" />
      <Account />
      <Footer />
    </div>
  )
}

export default AccountPage
