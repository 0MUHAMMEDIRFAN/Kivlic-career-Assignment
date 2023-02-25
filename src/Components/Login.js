import React from 'react'
import {Link} from "react-router-dom"

function Login() {
    return (
        <div className='login'>
            <form className="loginBox">
                <h1>Login</h1>
                <p>Enter email</p>
                <input type="email" name='email' required />
                <p>Password</p>
                <input type="password" name='email' required />
                <button>Login</button>
                <h6>Don't have an account? <Link to={"/Kivlic-career-Assignment/signup"}>Signup</Link></h6>
            </form>
        </div>
    )
}

export default Login
