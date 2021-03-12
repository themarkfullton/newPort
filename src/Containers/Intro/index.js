import Adventure from "./adventure.png";

function Intro() {
    return (
      <div className="introContainer">
        <div className="introText">
          <h2>Data Engineer & Full Stack Web Developer</h2>
          <h1>Mark Fullton</h1>
          <p><a href="https://www.linkedin.com/in/mark-fullton/" target="_blank">LinkedIn</a>
          <span>/</span><a href="https://github.com/themarkfullton" target="_blank">GitHub</a></p>
          <img className="adventureImage" src={Adventure}/>
        </div>
      </div>
    );
  }
  
  export default Intro;
  