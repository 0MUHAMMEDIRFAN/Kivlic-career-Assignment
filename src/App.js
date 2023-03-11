import "./style.scss"
import { useEffect, useContext } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";
import { AuthContext } from "./store/Context"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import Account from "./Components/Account";



function App() {

  const { setUser } = useContext(AuthContext)

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="Kivlic-career-Assignment/" element={<Home />} />
          <Route path="/Kivlic-career-Assignment/login" element={<LoginPage />} />
          <Route path="/Kivlic-career-Assignment/signup" element={<SignupPage />} />
          <Route path="/Kivlic-career-Assignment/about" element={<About />} />
          <Route path="/Kivlic-career-Assignment/services" element={<Services />} />
          <Route path="/Kivlic-career-Assignment/pricing" element={<Pricing />} />
          <Route path="/Kivlic-career-Assignment/contact" element={<Contact />} />
          <Route path="/Kivlic-career-Assignment/account" element={<Account />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
