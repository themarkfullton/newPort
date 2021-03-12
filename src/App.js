import "./assets/css/style.css";

import Navbar from "./Components/Navbar";
import Intro from "./Containers/Intro";
import About from "./Containers/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro />
      <About />
      {/* WorkHistory */}
      <Footer />
    </div>
  );
}

export default App;
