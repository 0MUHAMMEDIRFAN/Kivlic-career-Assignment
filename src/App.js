import "./style.scss"
import Banner from "./Pages/Banner.js";
import Navbar from "./Pages/Navbar";
import FormContainer from "./Pages/FormContainer";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <FormContainer/>
      <Footer/>
    </div>
  );
}

export default App;
