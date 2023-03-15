import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useForm } from '../Hooks/Form';
import firebase from 'firebase/compat/app';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [loginHint,setLoginHint] = useState("")
    const [value, handleChange] = useForm({
        email: "",
        password: ""
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoginHint("")
        firebase.auth().signInWithEmailAndPassword(value.email, value.password).then(() => {
            navigate("/Kivlic-career-Assignment");
            console.log("signed success");
        }).catch(error => {
            console.log(error.code)
            error.code === "auth/wrong-password" ? setLoginHint("Wrong password,Try again") : error.code === "auth/too-many-requests" &&setLoginHint("Too many requests, Try after some time")
        })
    };

    return (
        <div className='login'>
            <form className="loginBox" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div>
                    <input type="email" name='email' required onChange={handleChange} value={value.email} />
                    <p>Enter email</p>
                </div>
                <div>
                    <input type="password" name='password' required onChange={handleChange} value={value.password} />
                    <p>Password</p>
                    <span className='error'>{loginHint}</span>
                </div>
                <div className="button">
                    <h6><Link to={"/Kivlic-career-Assignment/signup"}>Create account</Link></h6>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
