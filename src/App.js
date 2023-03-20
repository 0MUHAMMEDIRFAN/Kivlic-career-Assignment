import "./style.scss"
import { useEffect, useContext } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import SignupPage from "./Pages/SignupPage";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import PricingPage from "./Pages/PricingPage";
import { AuthContext } from "./store/Context"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import AccountPage from "./Pages/AccountPage";
import popup from "./Components/popup";
import ContactPage from "./Pages/ContactPage";
import PhoneLoginPage from "./Pages/PhoneLoginPage";
import EmailLoginPage from "./Pages/EmailLoginPage";




function App() {
  window.popup = popup;

  const { setUser } = useContext(AuthContext)

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
      console.log(user)
    })
  })

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="Kivlic-career-Assignment/" element={<Home />} />
          <Route path="/Kivlic-career-Assignment/emaillogin" element={<EmailLoginPage />} />
          <Route path="/Kivlic-career-Assignment/phonelogin" element={<PhoneLoginPage />} />
          <Route path="/Kivlic-career-Assignment/signup" element={<SignupPage />} />
          <Route path="/Kivlic-career-Assignment/about" element={<AboutPage />} />
          <Route path="/Kivlic-career-Assignment/services" element={<ServicesPage />} />
          <Route path="/Kivlic-career-Assignment/pricing" element={<PricingPage />} />
          <Route path="/Kivlic-career-Assignment/contact" element={<ContactPage />} />
          <Route path="/Kivlic-career-Assignment/account" element={<AccountPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
