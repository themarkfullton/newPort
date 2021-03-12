import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import WHComponent from "../../Components/WHComponent";


function WorkHistory(){
    return(
        <div className="workHistoryWrapper">
            <div className="workHistoryContainer">
                <Router>
                    <h2><i className="fas fa-anchor"></i> Work History <a href="https://docs.google.com/document/d/1G8vSpxk5fgsGQKU68AD8qn_hNpKli4KAtbjFJwTeyks/edit?usp=sharing" target="_blank"><i class="fas fa-file-download"></i></a></h2>

                    <div className="workHistoryNavbar">
                        <NavLink to={{
                            pathname: "/work",
                            title: "data",
                            desc: "<p>Originally, a start up brought me on to assist with data cleaning and database transition owing to a backend job I had done for a mutual connection. The data engineer for the group was kind enough to mentor me in the tools of the trade and--even after the start up fell apart--I continued taking on similar jobs.</p><p>Most experience in data cleaning/munging, database set up/migration, and pipeline construction.</p>",
                            bullets: ["SQL", "Java", "Python", "Hadoop", "Spark", "PySpark", "RDS", "RedShift", "Airflow", "Elasticsearch", "Kibana", "Linux", "Zeppelin"]
                        }} className="workHistItem">Data Engineer</NavLink>
                        <NavLink to={{
                            pathname: "/work",
                            title: "web",
                            desc: "<p>Self-taught programmer who picked up C++ and DirectX to make games and wound up programming websites for non-profits/start ups simply because 'You know computers, right?'</p><p>Professional experience started with LAMP (Linux Apache MySQL PHP) stack web development and some basic sysadmin/network things. Eventually evolved to Java + Spring, Django, and Go stacks.</p><p>Experience building, migrating, and maintaining websites as well as translating legacy code into different languages/stacks.</p>",
                            bullets: ["C++", "Java", "SQL", "JavaScript", "Python", "Go", "Linux", "Postgre", "MongoDB", "Docker", "AWS", "GCP", "Git", "Django", "Nodejs"]
                        }} className="workHistItem">Programmer</NavLink>
                        {/* WORKING ON OMG I CANNOT THINK FOR SOME REASON */}
                        <NavLink to={{
                            pathname: "/work",
                            title: "ta",
                            desc: "<p>After returning to the US, I was hired on to tutor students in Full Stack Web (MERN based) concepts. Owing solely to my experience with Hadoop, I was also asked to TA </p>",
                            bullets: ["Reading/Debugging Others' Code", "Explaining difficult concepts", "Assessing student understanding", "Time Management", "Repo Management", "Installation/Troubleshooting", "Lesson Planning"]
                        }} className="workHistItem">TA/Tutor</NavLink>
                    </div>
                    <div className="projectContainer">
                        <Switch>
                            <Route exact path="/work" component={WHComponent} />
                            <Route path="/" />                       
                        </Switch>
                    </div>
                </Router>
            </div>
        </div>
    )
}

export default WorkHistory;