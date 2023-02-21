import React, { useState } from 'react'
import logo from "../images/logo.png"

function Navbar() {

    const [toggle,setToggle] = useState(false)
    const close = () =>{
        setToggle(false)
    }
    window.addEventListener("scroll", close)

    return (
        <div className='navbar' onMouseLeave={close}>
            <div className="nav none" onClick={()=>setToggle(!toggle)}></div>
            <img src={logo} alt="" className="logo" />
            <ul className={toggle ? "navLinks" : "navLinks hide"}>
                <li>About us</li>
                <li>Services</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
            <div className={toggle ? "signin" : "signin hide"}>
                <p className='child'>Login</p>
                <p className='child'>SignUp</p>
            </div>
        </div>
    )
}

export default Navbar
