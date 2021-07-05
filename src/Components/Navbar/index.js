import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
    return (
        <div className="navbarWrapper">
            <div className="navbarContainer">
                <div className="navbarLinks">
                    <p>
                            <Link smooth to="/#intro"><i className="fas fa-anchor"></i></Link>
                            <Link smooth to="/#about">About</Link>
                            <Link smooth to="/#dashboard">Projects</Link>
                            <Link smooth to="/#dashboard">Tutoring</Link>
                            <Link smooth to="/#resume">Resume</Link>
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
                </div>
            </div>
        </div>
    );
  }
  
  export default Navbar;
  