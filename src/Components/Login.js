import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom"
import { useForm } from '../Hooks/Form';
import firebase from 'firebase/compat/app';
import { useNavigate } from 'react-router-dom';
import OtherSignin from './OtherSignin';
import { AuthContext } from '../store/Context';

function Login() {
    const navigate = useNavigate();
    const [loginHint, setLoginHint] = useState("")
    const { mode } = useContext(AuthContext)
    const [value, handleChange] = useForm({
        email: "",
        password: ""
    })
    const handleSend=()=>{
        console.log("verifying")
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('Login', {
            'size': 'invisible',
            'callback': (response) => {
            console.log("verified")
            console.log(response)
        }
    });
    console.log(window.recaptchaVerifier)
    firebase.auth().signInWithPhoneNumber(value.email,window.recaptchaVerifier).then((confirmationResult)=>{
        console.log("Code sent")
        console.log(confirmationResult)
        window.confirmationResult = confirmationResult;
    }).catch((error)=>{
        console.log(error)
    })

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoginHint("")
        !mode ? window.confirmationResult.confirm(value.password).then((result) => {
          }).catch((error) => {
          }):
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
                    {mode ?
                        <input type="email" name='email' required onChange={handleChange} value={value.email} />
                        : <input type="text" name='email' required onChange={handleChange} value={value.email} />
                    }
                    <p>{mode ? "Enter email" : "Enter Phone Number"}</p>
                </div>
                <div>
                    {mode ?
                        <input type="password" name='password' required onChange={handleChange} value={value.password} />
                        : <input type="text" name='password' required onChange={handleChange} value={value.password} />
                    }
                    <p>{mode ? "Password" : "Enter Code"}</p>
                </div>
                <div className="forgetPassword">
                    <span className='error'>{loginHint}</span>
                    {mode && <span onClick={() => {
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
                    }}>Forget Password?</span>}
                </div>
                <div className="button">
                    {mode ? <h6><Link to={"/Kivlic-career-Assignment/signup"}>Create account</Link></h6>
                        : <button type='button' onClick={handleSend}>Send Code</button>
                    }                    <button id='Login'>Login</button>
                </div>
            </form>
            <OtherSignin />
        </div>
    )
}

export default Login
