import React from 'react'
import logo from "../images/logo.png"

function Navbar() {
    return (
        <div className='navbar'>
            <img src={logo} alt="" className="logo" />
            <ul className="navs">
                <li>About us</li>
                <li>Services</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
            <div className="signin">
                <p>Login</p>
                <p>SignUp</p>
            </div>
        </div>
    )
}

export default Navbar
