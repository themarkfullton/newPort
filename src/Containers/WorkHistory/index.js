import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

function WorkHistory(){
    return(
        <div className="workHistoryWrapper">
            <div className="workHistoryContainer">
                <Router>
                    <h2>Work History <a href="https://docs.google.com/document/d/1G8vSpxk5fgsGQKU68AD8qn_hNpKli4KAtbjFJwTeyks/edit?usp=sharing" target="_blank"><i class="fas fa-file-download"></i></a></h2>

                    <div className="workHistoryNavbar">
                        <NavLink to="/" className="workHistItem">Data Engineer</NavLink>
                        <NavLink to="/web" className="workHistItem">Web Developer</NavLink>
                        <NavLink to="/ta" className="workHistItem">TA/Tutor</NavLink>
                    </div>
                    <div className="projectContainer">
                        <Switch>
                            <Route exact path="/" component={} />
                            <Route exact path="/web" component={} />
                            <Route exact path="/ta" component={} />
                            <Route component={} />                            
                        </Switch>
                    </div>
                </Router>
            </div>
        </div>
    )
}

export default WorkHistory;