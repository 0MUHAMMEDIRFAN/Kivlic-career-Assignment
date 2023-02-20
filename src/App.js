import "./style.scss"
import Banner from "./Pages/Banner.js";
import Navbar from "./Pages/Navbar";
import FormContainer from "./Pages/FormContainer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <FormContainer/>
    </div>
  );
}

export default App;
