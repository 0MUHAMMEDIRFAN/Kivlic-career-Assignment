import React from 'react'
import { Link } from "react-router-dom"

function Signup() {


    const handleSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <div className='login'>
            <form className="loginBox" onSubmit={handleSubmit}>
                <h1>Signup</h1>
                <p>Full Name</p>
                <input type="text" name='username' required />
                <p>Enter email</p>
                <input type="email" name='email' required />
                <p>Password</p>
                <input type="password" name='password' required />
                <p>Confirm Password</p>
                <input type="password" name='confirmPassword' required />
                <button>Signup</button>
                <h6>Already have an account? <Link to={"/Kivlic-career-Assignment/login"}>Login</Link></h6>
            </form>
        </div>
    )
}

export default Signup
