import React, {useEffect, useState } from "react";
import * as d3 from "d3";
import ToggleButton from "../../Components/ToggleButton";
import SessionStats from "../../Components/SessionStats";
import "./temp.css";

const TutoringDashboard = () => {
    const [tutorFilter, setTutorFilter] = useState("all")
    const [sessData, setSessData] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const loadData = () => {
        var sessionDataURL = `https://raw.githubusercontent.com/themarkfullton/newPort/main/data/generated/sessions_${tutorFilter}.csv`
        const parseDate = d3.timeParse("%Y-%m-%d");
        d3.csv(sessionDataURL).then( (d) => {
            d.forEach((sess) => {
                sess.session_date = parseDate(sess.session_date);
                sess.hours_total = +sess.hours_total;
            });
            setTimeout(() => {}, 4000);
            setSessData(d)
            setTimeout(() => {}, 10000);
            setLoaded(true);
        });
    }

    useEffect(() => {
        if (loaded == false){
            loadData();
        }
        return () => undefined;
    }, []);

    return (
    <div id="dashboard" className="dashboardWrapper">
        <div className="dashboardHeader">
            <ToggleButton text="All" filter="all" toggleFunction={setTutorFilter} toggleLoaded={setLoaded} loadData={loadData} />
            <ToggleButton text="Data" filter="data" toggleFunction={setTutorFilter} toggleLoaded={setLoaded} loadData={loadData} />
            <ToggleButton text="Web" filter="web" toggleFunction={setTutorFilter} toggleLoaded={setLoaded} loadData={loadData} />
        </div>
        <div className="dashboardBody">
            {loaded ? <SessionStats data={sessData} /> : ""}
            <div id="studentStats"></div>
            <div id="topicStats"></div>
        </div>
    </div>
    );
  }
  
  export default TutoringDashboard;
  