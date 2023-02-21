import "./style.scss"
import Banner from "./Pages/Banner.js";
import Navbar from "./Pages/Navbar";
import FormContainer from "./Pages/FormContainer";
import Footer from "./Pages/Footer";
import CopyRight from "./Pages/CopyRight";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <FormContainer/>
      <Footer/>
      <CopyRight/>
    </div>
  );
}

export default App;
