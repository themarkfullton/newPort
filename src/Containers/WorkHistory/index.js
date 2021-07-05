import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import WHComponent from "../../Components/WHComponent";


function WorkHistory(){
    return(
        <div id="resume" className="workHistoryWrapper">
            <div className="workHistoryContainer">
                <Router>
                    <h2><i className="fas fa-anchor"></i> Resume <a href="https://docs.google.com/document/d/1NpzYCnu_ymNVRJ3Boe7f8mRMwkuwMXfgybfNKscPSt4/edit?usp=sharing" target="_blank"><i class="fas fa-file-download"></i></a></h2>

                    <div className="workHistoryNavbar">
                    <NavLink to={{
                            pathname: "/",
                            title: "ta",
                            time: "current",
                            bullets: [["Data Analytics", "Full Stack Web Dev"], ["Debugging", "Explaining"], ["Mentoring", "Repo Maintaining"]]
                        }} className="workHistItem">TA/Tutor</NavLink>
                        <NavLink to={{
                            pathname: "/",
                            title: "data",
                            time: "3 years",
                            bullets: [["SQL", "Java"], ["Python", "Hadoop"], ["Spark", "PySpark"], ["RDS", "RedShift"], ["Airflow", "Elasticsearch"], ["Kibana", "Linux"]]
                        }} className="workHistItem">Data Engineer</NavLink>
                        <NavLink to={{
                            pathname: "/",
                            title: "web",
                            time: "4 years",
                            bullets: [["C++", "Java"], ["SQL", "JavaScript"], ["Python", "Go"], ["Linux", "Postgre"], ["MongoDB", "Docker"], ["AWS", "GCP"], ["Nodejs", "Django"]]
                        }} className="workHistItem">Programmer</NavLink>
                    </div>
                    <div className="projectContainer">
                        <Switch>
                            <Route path="/" component={WHComponent}/>                       
                        </Switch>
                    </div>
                </Router>
            </div>
        </div>
    )
}

export default WorkHistory;