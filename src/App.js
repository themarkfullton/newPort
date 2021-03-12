import "./assets/css/style.css";

import Navbar from "./Components/Navbar";
import Intro from "./Containers/Intro";
import About from "./Containers/About";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro />
      <About />
      {/* Projects */}
      {/* WorkHistory */}
    </div>
  );
}

export default App;
