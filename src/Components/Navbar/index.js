function Navbar() {
    return (
        <div className="navbarWrapper">
            <div className="navbarContainer">
                <div className="navbarLinks">
                    <p>
                            <a><i className="fas fa-anchor"></i></a>
                            <a>About</a>
                            <a>Projects</a>
                            <a>Resume</a>
                    </p>
                </div>
                <div className="navbarSocial">
                    <a href="https://github.com/themarkfullton" target="_blank">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/mark-fullton/" target="_blank">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="https://twitter.com/FulltonThe" target="_blank">
                        <i className="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="mailto:the.mark.fullton@gmail.com" target="_blank">
                        <i className="fas fa-envelope-open-text fa-2x"></i>
                    </a>
                </div>
            </div>
        </div>
    );
  }
  
  export default Navbar;
  