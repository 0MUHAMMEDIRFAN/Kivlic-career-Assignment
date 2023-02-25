import React from 'react'
import { useForm } from '../Hooks/Form'
import uploadIcon from "../images/upload.png"

function FormContainer() {

    const [value, handleChange] = useForm({
        email: "",
        fname: "",
        lname: "",
        phone: "",
        file: ""
    });


    const handleSubmit = (event) => {
        event.preventDefault();
        handleChange("")
        document.querySelectorAll(".inputBlur").forEach(el => el.classList.remove("inputBlur"))
        document.getElementById("file").value="";
        console.log("submitted")
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
                    <label htmlFor="file" className={value.file ? "file" : ""}><p>{value.file ? value.file :"Upload CV"}</p><img src={uploadIcon} alt="" /></label>
                    <input type="file" id='file' name='file' accept='text/plain, application/pdf,application/msword' onChange={handleChange} required />
                    <p className='tip'>Select resume file (TXT, PDF or Word DOC)</p>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormContainer
