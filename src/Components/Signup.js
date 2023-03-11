import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useForm } from '../Hooks/Form'
import { FirebaseContext } from '../store/Context'
import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'



function Signup() {
    const navigate=useNavigate();

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
            alert("password not equal")
        } else {

            firebase.auth().createUserWithEmailAndPassword(value.email, value.password).then((result) => {
                result.user.updateProfile({ displayName: value.username }).then(() => {
                    Firebase.firestore().collection("users").doc(result.user.uid).set({
                        id: result.user.uid,
                        username: value.username,
                        email: value.email
                    })
                    .then(() => {
                        console.log("data stored");
                        firebase.auth().signInWithEmailAndPassword(value.email, value.password).then(()=>{
                            console.log("signed success");
                            navigate("/Kivlic-career-Assignment");
                        })
                    }).catch(err => {
                        console.log(err)
                    })
                    console.log("displayName ready")
                }).catch(error => {
                    console.log(error)
                })
                console.log("username ready")
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    return (
        <div className='login'>
            <form className="loginBox" onSubmit={handleSubmit}>
                <h1>Signup</h1>
                <p>User Name</p>
                <input type="text" name='username' value={value.username} onChange={handleChange} required />
                <p>Enter email</p>
                <input type="email" name='email' value={value.email} onChange={handleChange} required />
                <p>Password</p>
                <input type="password" name='password' value={value.password} onChange={handleChange} required />
                <p>Confirm Password</p>
                <input type="password" name='confirmPassword' value={value.confirmPassword} onChange={handleChange} required />
                <button>Signup</button>
                <h6>Already have an account? <Link to={"/Kivlic-career-Assignment/login"}>Login</Link></h6>
            </form>
        </div>
    )
}

export default Signup
