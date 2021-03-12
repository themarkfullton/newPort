function About() {
    return (
    <div id="about" className="aboutWrapper">
      <div className="aboutContainer">
        <h2><i className="fas fa-anchor"></i> Who Am I?</h2>
        <p>Little has changed since I picked up my first C++ / DirectX book as a kid--I'm still knees-deep in research, excitedly trying to build programs to solve real-world problems.</p>
        <p>Owing to my obsession with fixing problems, a majority of my 4+ years experience has been with start-ups/non-profits and my skillset is varied as a result.</p>
        <p>I'm accustomed to taking ownership of projects as a whole (as opposed to fixating on the specific area to which I've been assigned) and the concept of 9-5 makes little sense to me. I don't work for pay; I work for solutions.</p>
        <br />
        <h2 id="projects"><i className="fas fa-anchor"></i> Top 6 Languages</h2>
        <p>Click on the language to see a sample project. <b>More projects (and tutorials) can be found on <a href="https://github.com/themarkfullton" target="_blank">GitHub</a></b></p>
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
      </div>
    </div>
    );
  }
  
  export default About;
  