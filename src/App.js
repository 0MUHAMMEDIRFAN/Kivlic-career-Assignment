import "./style.scss"

import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
