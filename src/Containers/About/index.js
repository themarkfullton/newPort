import TutoringDashboard from "../TutoringDashboard";

function About() {
    return (
    <div id="about" className="aboutWrapper">
      <div className="aboutContainer">
        <h2><i className="fas fa-anchor"></i> Who Am I?</h2>
        <p>Long story short: I'm a former Full Stack Web and Data Engineer with four years of experience helping non-profit and startup organizations.</p>
        <p>Why "former?"</p>
        <p>While I love both web development and data engineering, lower-level programming languages have always been close to my heart (the first language I ever picked up was C++). Therefore, I'm working towards being able to use one on the job.</p>
        <p>Currently, while upskilling, I'm working as a Teacher's Assistant for a Data Analytics course and tutoring non-technical students in both Full Stack and Data concepts.</p>
        <p>My work history has made me flexible, proactive, and geared towards taking responsibility for whole projects (as opposed to specific parts of them).</p>
        
        <h2><i className="fas fa-anchor"></i> Top Languages</h2>
        <p>Click on the language to see an example project.</p>
        <table>
            <tr>
                <td><a href="https://github.com/themarkfullton/patchwork-back-end" target="_blank">Java</a></td>
                <td><a href="https://github.com/themarkfullton/opencv-practise" target="_blank">C++</a></td>
                <td><a href="https://github.com/themarkfullton/blog-backend" target="_blank">Python</a></td>
            </tr>
            <tr>
                <td><a href="https://github.com/themarkfullton/transformation-api-v2" target="_blank">Golang</a></td>
                <td><a href="https://github.com/themarkfullton/transformation-app-v2" target="_blank">JavaScript</a></td>
                <td><a href="" target="_blank">SQL</a></td>
            </tr>
        </table>
        
        <br />
        <h2 id="projects"><i className="fas fa-anchor"></i> Current Projects</h2>
        <p>One thing you'll quickly realize about me--I live to translate people's ideas into code.</p>
        <p>In my freetime, I love nothing more than to assist friends / acquaintances with their app ideas.</p>
        <p>Although I often can't share the most recent or central code, here's an example from each of the projects I'm currently assisting with:</p>
        <table>
            <tr>
                <td><a href="https://github.com/themarkfullton/patchwork-back-end" target="_blank">Transformation</a></td>
                <td><a href="https://github.com/themarkfullton/opencv-practise" target="_blank">GH Birders</a></td>
                <td><a href="https://github.com/themarkfullton/blog-backend" target="_blank">Nanite</a></td>
            </tr>
            <tr>
                <td><a href="https://github.com/themarkfullton/transformation-api-v2" target="_blank">Class Calendar</a></td>
                <td><a href="https://github.com/themarkfullton/transformation-app-v2" target="_blank">Tutorials</a></td>
            </tr>
        </table>
        <br />
        <h2 id="dashboard"><i className="fas fa-anchor"></i> Tutoring Statistics</h2>
        <p>As a self-taught programmer, I'm passionate about helping non-technical students grasp the rudiments of programming. In addition to working as a Teacher's Assistant for a Data Analytics class of 60+ students, I tutor (on average) 30 students each week in both Full Stack (MERN) and Data concepts.</p>
        <p>Although I originally tutored exclusively web students, my employer's need for Data Analytics tutors has since shifted the ratio in Data's favour.</p>
        <TutoringDashboard />
      </div>
    </div>
    );
  }
  
  export default About;
  