import React from 'react'
import { useForm } from '../Hooks/Form';
import firebase from 'firebase/compat/app';
import { useNavigate } from 'react-router-dom';
import OtherSignin from './OtherSignin';

function PhoneLogin() {
    const navigate = useNavigate();

    const [value, handleChange] = useForm({
        phoneNumber: "",
        Otp: ""
    })
    const handleSend = () => {
        console.log("verifying")
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('Login', {
            'size': 'invisible',
            'callback': (response) => {
                console.log("verified")
                console.log(response)
            }
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        window.confirmationResult.confirm(value.Otp).then((result) => {
            navigate("/Kivlic-career-Assignment");
            console.log("Signed Success");
            window.popup("Signed In");
        }).catch((error) => {
        })
    };

    return (
        <div className='login'>
            <form className="loginBox" onSubmit={handleSubmit}>
                <h1>PHONE LOGIN</h1>
                <div>
                    <input type="text" name='phoneNumber' required onChange={handleChange} value={value.phoneNumber} />
                    <p>Enter Phone Number</p>
                </div>
                <div id='otpContainer'>
                    <input type="text" name='Otp' required onChange={handleChange} value={value.Otp} />
                    <p>Enter OTP</p>
                </div>
                <div className="button">
                    <button type='button' id='sendCode' onClick={handleSend}>Send Code</button>
                    <button id='Login'>Login</button>
                </div>
            </form>
            <OtherSignin email={true} />
        </div>
    )
}

export default PhoneLogin
