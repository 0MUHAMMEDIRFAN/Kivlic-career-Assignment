import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../images/logo.png"
import { AuthContext } from '../store/Context';

function Navbar() {

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
                <li onClick={() => history("/Kivlic-career-Assignment/about")}>About us</li>
                <li onClick={() => history("/Kivlic-career-Assignment/services")}>Services</li>
                <li onClick={() => history("/Kivlic-career-Assignment/pricing")}>Pricing</li>
                <li onClick={() => history("/Kivlic-career-Assignment/contact")}>Contact</li>
            </ul>

            {user ?
                <ul className={toggle ? "signin" : "signin hide"}>
                    <li className='child' onClick={() => history("/Kivlic-career-Assignment/account")}><i className='bx bxs-user-circle'></i>Account</li>
                </ul>
                :
                <ul className={toggle ? "signin" : "signin hide"}>
                    <li className='child' onClick={() => history("/Kivlic-career-Assignment/login")}>Login</li>
                    {/* <li className='child' onClick={() => history("/Kivlic-career-Assignment/signup")}>SignUp</li> */}
                </ul>}
        </div>
    )
}

export default Navbar
