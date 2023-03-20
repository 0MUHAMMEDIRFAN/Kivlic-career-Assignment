import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useForm } from '../Hooks/Form'
import { FirebaseContext } from '../store/Context'
import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import OtherSignin from './OtherSignin'



function Signup() {
    const navigate = useNavigate();
    const [passwordHint, setPasswordHint] = useState("Use 6 or more characters")
    const [emailHint, setEmailHint] = useState("You can use letters, numbers and full stops")

    const [value, handleChange] = useForm({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const { Firebase } = useContext(FirebaseContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value.password !== value.confirmPassword) {
            setPasswordHint("Passwords didn't match.")
            document.querySelector(".passwordHint").classList.add("error")

        } else {

            document.querySelector(".passwordHint").classList.remove("error")
            setPasswordHint("Use 6 or more characters")
            setEmailHint("You can use letters, numbers and full stops")
            document.querySelector(".emailHint").classList.remove("error")
            firebase.auth().createUserWithEmailAndPassword(value.email, value.password).then((result) => {
                result.user.updateProfile({ displayName: value.username }).then(() => {
                    Firebase.firestore().collection("users").doc(result.user.uid).set({
                        id: result.user.uid,
                        username: value.username,
                        email: value.email
                    })
                        .then(() => {
                            console.log("data stored");
                            firebase.auth().signInWithEmailAndPassword(value.email, value.password).then(() => {
                                console.log("signed success");
                                window.popup("Signin Success");
                                navigate("/Kivlic-career-Assignment");
                            })
                        })
                    // .catch(err => {
                    //     console.log(err)
                    // })
                    console.log("displayName ready")
                })
                // .catch(error => {
                //     console.log(error+"this is the error")
                // })
                console.log("username ready")
            }).catch((error) => {
                error.code === "auth/email-already-in-use" && setEmailHint("The email address is already in use")
                document.querySelector(".emailHint").classList.add("error")
                console.error(error)
            })
        }
    }

    return (
        <div className='login'>
            <form className="loginBox" onSubmit={handleSubmit}>
                <h1>SIGN UP</h1>
                <div>
                    <input type="text" name='username' value={value.username} onChange={handleChange} required />
                    <p>User Name</p>
                </div>
                <div>
                    <input type="email" name='email' value={value.email} onChange={handleChange} required />
                    <p>Enter email</p>
                    <span className='emailHint'>{emailHint}</span>
                </div>
                <div>
                    <input type="password" minLength="6" name='password' value={value.password} onChange={handleChange} required />
                    <p>Password</p>
                </div>
                <div>
                    <input type="password" name='confirmPassword' value={value.confirmPassword} onChange={handleChange} required />
                    <p>Confirm Password</p>
                    <span className='passwordHint'>{passwordHint}</span>
                </div>
                <div className="button">
                    <h6><Link to={"/Kivlic-career-Assignment/emaillogin"}>Sign in instead</Link></h6>
                    <button>Signup</button>
                </div>
            </form>
            <OtherSignin />
        </div>
    )
}

export default Signup
