import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../images/logo.png"
import { AuthContext } from '../store/Context';

function Navbar(props) {

    useEffect(() => {
        const currentNav = document.getElementById(props.currentNav)
        if (currentNav) {
            currentNav.style.color = "#20DE96"
            currentNav.style.borderBottom = "1px #000 solid"
        }
    })

    const history = useNavigate();
    const [toggle, setToggle] = useState(false)
    const { user } = useContext(AuthContext)
    const close = () => {
        setToggle(false)
    }
    window.addEventListener("scroll", close)

    return (
        <div className='navbar' onMouseLeave={close}>
            <div className="navDiv none" onClick={() => setToggle(!toggle)}>
                <div className="nav" ></div>
            </div>
            <img src={logo} alt="" className="logo" onClick={() => history("/Kivlic-career-Assignment/")} />
            <ul className={toggle ? "navLinks" : "navLinks hide"}>
                <li id='AboutUs' onClick={() => history("/Kivlic-career-Assignment/about")}>About us</li>
                <li id='Services' onClick={() => history("/Kivlic-career-Assignment/services")}>Services</li>
                <li id='Pricing' onClick={() => history("/Kivlic-career-Assignment/pricing")}>Pricing</li>
                <li id='Contact' onClick={() => history("/Kivlic-career-Assignment/contact")}>Contact</li>
            </ul>

            {user ?
                <ul className={toggle ? "signin" : "signin hide"}>
                    <li id='Account' className='child' onClick={() => history("/Kivlic-career-Assignment/account")}><i className='bx bxs-user-circle'></i>Account</li>
                </ul>
                :
                <ul className={toggle ? "signin" : "signin hide"}>
                    <li id='Login' className='child' onClick={() => history("/Kivlic-career-Assignment/emaillogin")}>LOGIN</li>
                </ul>}
        </div>
    )
}

export default Navbar
