import React, { useContext, useState } from 'react'
import { useForm } from '../Hooks/Form'
import uploadIcon from "../images/upload.png"
import { AuthContext, FirebaseContext } from '../store/Context';
import "firebase/compat/storage"


function FormContainer() {

    const [value, handleChange] = useForm({
        email: "",
        fname: "",
        lname: "",
        phone: "",
        file: ""
    });
    const [resume, setResume] = useState(null)

    const { user } = useContext(AuthContext)
    const { Firebase } = useContext(FirebaseContext)
    const fileChange = (event) => {
        handleChange(event);
        if (event.target.files[0]) {
            let s = event.target.files[0].type;
            if (s === "text/plain" || s === "application/pdf" || s === "application/msword") {
                setResume(event.target.files[0])
            } else {
                setResume("")
            }
        } else {
            setResume("")
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (user) {
            handleChange("")
            document.querySelectorAll(".inputBlur").forEach(el => el.classList.remove("inputBlur"))
            document.getElementById("file").value = "";
            console.log("submitted")
            Firebase.storage().ref("profiles/" + user.uid + "/resume/" + value.fname+value.lname).put(resume)
            .then((ref) => {
                console.log("stored")
            //     ref.getDownloadURL().then((url) => {
            //         console.log(url);
            //         Firebase.firestore().collection("users").doc(user.uid).set({
            //             resume: url
            //         }).then(() => console.log("stored on firebase"));
            //     })
            })
        } else {
            alert("Login First And Continue")
        }
    }
    const handleBlur = (e) => {
        e.target.classList.add("inputBlur")
    }

    return (
        <div className='formContainer'>
            <div className="heading">

                <h2>Personal Details</h2>
                <p>Please complete the below form and attach a CV.</p>
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <div className="email">
                    <div>
                        <p>Email address</p>
                        <input type="email" name='email' value={value.email} onChange={handleChange} required onBlur={handleBlur} />
                    </div>
                </div>
                <div className="details">
                    <div>
                        <p>First Name</p>
                        <input type="text" name='fname' pattern="[A-Za-z]*" value={value.fname} onChange={handleChange} required onBlur={handleBlur} title='Only Letters allowed' />
                    </div>
                    <div>
                        <p>Last Name</p>
                        <input type="text" name='lname' pattern="[A-Za-z]*" value={value.lname} onChange={handleChange} required onBlur={handleBlur} title='Only Letters allowed' />
                    </div>
                    <div>
                        <p>Telephone</p>
                        <input type="text" name='phone' pattern='(\+|(\+[1-9])?[0-9]*)' value={value.phone} onChange={handleChange} required onBlur={handleBlur} />
                        <p>Please include your country and area code</p>
                    </div>
                </div>
                <div className="cv">
                    <p>Upload CV</p>
                    <label htmlFor="file" className={value.file ? "file" : ""}><p>{value.file ? value.file : "Upload CV"}</p><img src={uploadIcon} alt="" /></label>
                    <input type="file" id='file' name='file' accept='text/plain, application/pdf,application/msword' onChange={fileChange} required />
                    <p className='tip'>Select resume file (TXT, PDF or Word DOC)</p>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormContainer
