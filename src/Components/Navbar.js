import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../images/logo.png"

function Navbar() {
    
    const history =useNavigate();
    const [toggle,setToggle] = useState(false)
    const close = () =>{
        setToggle(false)
    }
    window.addEventListener("scroll", close)

    return (
        <div className='navbar' onMouseLeave={close}>
            <div className="nav none" onClick={()=>setToggle(!toggle)}></div>
            <img src={logo} alt="" className="logo" onClick={()=>history("/")} />
            <ul className={toggle ? "navLinks" : "navLinks hide"}>
                <li onClick={()=>history("/about")}>About us</li>
                <li onClick={()=>history("/services")}>Services</li>
                <li onClick={()=>history("/pricing")}>Pricing</li>
                <li onClick={()=>history("/contact")}>Contact</li>
            </ul>
            <div className={toggle ? "signin" : "signin hide"}>
                <p className='child' onClick={()=>history("/login")}>Login</p>
                <p className='child'onClick={()=>history("/signup")}>SignUp</p>
            </div>
        </div>
    )
}

export default Navbar
