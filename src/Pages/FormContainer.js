import React from 'react'
import uploadIcon from "../images/upload.png"

function FormContainer() {
    return (
        <div className='formContainer'>
            <div className="heading">

                <h2>Personal Details</h2>
                <p>Please complete the below form and attach a CV.</p>
            </div>
            <form className='form'>
                <div className="email">
                    <div>
                        <p>Email address</p>
                        <input type="email" id='email' />
                    </div>
                </div>
                <div className="details">
                    <div>
                        <p>First Name</p>
                        <input type="text" id='fname' pattern="[A-Za-z]*" />
                    </div>
                    <div>
                        <p>Last Name</p>
                        <input type="text" id='lname' pattern="[A-Za-z]*" />
                    </div>
                    <div>
                        <p>Telephone</p>
                        <input type="text" id='phone'/>
                        <p>Please include your country and area code</p>
                    </div>
                </div>
                <div className="cv">
                    <div>
                        <p>Upload CV</p>
                        <label htmlFor="file"><p>Upload CV</p><img src={uploadIcon} alt="" /></label>
                            <input type="file" id='file' accept='text/plain, application/pdf,application/msword'/>
                        <p className='tip'>Select resume file (TXT, PDF or Word DOC)</p>
                    </div>

                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormContainer
