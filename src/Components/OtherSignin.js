import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import firebase from 'firebase/compat/app';
import { AuthContext } from '../store/Context';

function OtherSignin() {

    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext)

    return (
        <div className='otherSignin'>
            <button onClick={()=>{

            }}> <span className='icon emailIcon'></span> Continue With Email</button>
            <center className='or'>OR</center>
            <button onClick={() => {
                let provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(provider).then((result) => {
                    setUser(result.user)
                    navigate("/Kivlic-career-Assignment");
                }).catch((error) => {
                    console.log(error)
                })
            }}> <span className='icon googleIcon'></span> Continue With Google</button>
            <button onClick={()=>{

            }}> <span className='icon phoneIcon'></span> Continue With Phone</button>
        </div>
    )
}

export default OtherSignin
