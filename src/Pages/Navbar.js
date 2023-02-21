import React, { useState } from 'react'
import logo from "../images/logo.png"

function Navbar() {

    const [toggle,setToggle] = useState(false)
    const navigate = () =>{
        setToggle(!toggle)
        console.log(toggle)

    }

    return (
        <div className='navbar'>
            <div className="nav none" onClick={navigate}></div>
            <img src={logo} alt="" className="logo" />
            <ul className={toggle ? "navLinks" : "navLinks hide"}>
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
