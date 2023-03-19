import React, { useContext, useState } from 'react'
import firebase from 'firebase/compat/app'
import { AuthContext, FirebaseContext } from '../store/Context'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../Hooks/Form'
import "firebase/compat/storage"

function Account() {

    const { Firebase } = useContext(FirebaseContext)

    const [image, setImage] = useState("")
    const [open, setOpen] = useState(false)
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [value, handleChange] = useForm({
        username: "",
    });
    const fileChange = (event) => {
        handleChange(event);
        console.log(event.target.files)
        if (event.target.files[0]) {

            let s = event.target.files[0].type;
            if (s === "image/png" || s === "image/jpg" || s === "image/webp" || s === "image/jpeg") {
                setImage(event.target.files[0])
            } else {
                setImage("")
            }
        } else {
            setImage("")
        }

    }

    const handleUpdate = (event) => {
        event.preventDefault();
        image && Firebase.storage().ref("profiles/" + user.uid + "/picture/" + image.name).put(image).then(({ ref }) => {
            ref.getDownloadURL().then((url) => {
                console.log(url)
                user.updateProfile({ photoURL: url })
                window.popup("profile picture updated")

            })
        })
        value.username && Firebase.firestore().collection("users").doc(user.uid).update(
            {
                username: value.username,
            }).then(() => console.log("username changed"))
        value.username && user.updateProfile({ displayName: value.username });
        console.log(user.uid)
        image && user.updateProfile({ photoURL: "" });
        console.log(user.displayName, user);
        setImage("")
        setOpen(false)
        handleChange()






    }

    return (
        <div className='account'>
            {user &&
                <div className="info">
                    <div className="img">
                        <img src={user.photoURL || "https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png"} alt="loading" />
                    </div>
                    <div className="details">
                        <h1>{user.displayName}</h1>
                        <h3>{user.email}<i className={user.emailVerified ? 'bx bxs-check-circle' : 'bx bxs-x-circle'} style={user.emailVerified ? { color: "green" } : { color: "red" }} title="Email not verified">{user.emailVerified || <span onClick={() => {
                            user.sendEmailVerification().then(() => window.popup("varification email sent to your email ,Check your email"))
                        }}>Verify</span>}</i></h3>
                    </div>
                </div>
            }

            {open && <form className="update" onSubmit={handleUpdate}>
                <i className='bx bx-x' onClick={() => setOpen(false)} ></i>
                <p>Update username</p>
                <input type="text" name='username' id='username' value={value.username} onChange={handleChange} />
                <p>Update Profile picture</p>
                <input type="file" id='profile' name='profile' accept='image/png ,image/jpeg ,image/jpg, image/webp' onChange={fileChange} />
                <label htmlFor="profile">
                    {image ?
                        <img height="100%" width="100%" src={image && URL.createObjectURL(image)} alt="posts" /> :
                        <>Click to Upload picture <span></span> <button>Browse File</button></>
                    }
                </label>
                <button>Save & Update</button>
            </form>}

            <div className="btn">

                <button onClick={() => {
                    firebase.auth().signOut().then(() => {
                        navigate("/Kivlic-career-Assignment/");
                        console.log("SignOut");
                        window.popup("Signed Out Success")
                    })
                }}>Logout</button>

                <button onClick={() => { setOpen(true) }}>Edit Profile</button>

            </div>
        </div>
    )
}

export default Account
