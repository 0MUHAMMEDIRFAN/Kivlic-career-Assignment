import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useForm } from '../Hooks/Form';
import firebase from 'firebase/compat/app';
import { useNavigate } from 'react-router-dom';
import OtherSignin from './OtherSignin';

function Login() {
    const navigate = useNavigate();
    const [loginHint, setLoginHint] = useState("")
    const [value, handleChange] = useForm({
        email: "",
        password: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoginHint("")

        firebase.auth().signInWithEmailAndPassword(value.email, value.password).then(() => {
            navigate("/Kivlic-career-Assignment");
            console.log("Signed Success");
            window.popup("Signed In");
        }).catch(error => {
            console.log(error.code)
            error.code === "auth/wrong-password" ? setLoginHint("Wrong password,Try again") : error.code === "auth/too-many-requests" ? setLoginHint("Too many requests, Try after some time") : error.code === "auth/user-not-found" && setLoginHint("This email is not Registered")
        })
    };

    return (
        <div className='login'>
            <form className="loginBox" onSubmit={handleSubmit}>
                <h1>EMAIL LOGIN</h1>
                <div>
                    <input type="email" name='email' required onChange={handleChange} value={value.email} />
                    <p>Enter email</p>
                </div>
                <div>
                    <input type="password" name='password' required onChange={handleChange} value={value.password} />
                    <p>Password</p>
                </div>
                <div className="forgetPassword">
                    <span className='error'>{loginHint}</span>
                    <span onClick={() => {
                        setLoginHint("")
                        value.email ?
                            firebase.auth().sendPasswordResetEmail(value.email)
                                .then(() => {
                                    alert("Password Reset Link Sent to your Registered email")
                                    window.popup("Password Reset Link Sent to your Registered email")
                                })
                                .catch((error) => {
                                    console.log(error)
                                    error.code === "auth/invalid-email" ? setLoginHint("Wrong email address") : error.code === "auth/user-not-found" && setLoginHint("This email is not registered")
                                }) : setLoginHint("Enter email and continue")
                    }}>Forget Password?</span>
                </div>
                <div className="button">
                    <h6><Link to={"/Kivlic-career-Assignment/signup"}>Create account</Link></h6>
                    <button id='Login'>Login</button>
                </div>
            </form>
            <OtherSignin />
        </div>
    )
}

export default Login
