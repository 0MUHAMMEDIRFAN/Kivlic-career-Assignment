import React from 'react'
import { Link } from "react-router-dom"
import { useForm } from '../Hooks/Form';
import firebase from 'firebase/compat/app';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [value,handleChange]= useForm({
        email:"",
        password:""
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(value.email, value.password).then(() => {
            navigate("/Kivlic-career-Assignment");
            console.log("signed success");
        }).catch(error=>{
            console.log(error)
        })
    };

    return (
        <div className='login'>
            <form className="loginBox" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <p>Enter email</p>
                <input type="email" name='email' required onChange={handleChange} value={value.email} />
                <p>Password</p>
                <input type="password" name='password' required onChange={handleChange} value={value.password}/>
                <button>Login</button>
                <h6>Don't have an account? <Link to={"/Kivlic-career-Assignment/signup"}>Signup</Link></h6>
            </form>
        </div>
    )
}

export default Login
