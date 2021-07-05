import React, {useEffect, useState } from "react";
import * as d3 from "d3";
import ToggleButton from "../../Components/ToggleButton";
import SessionStats from "../../Components/SessionStats";
import StudentStats from "../../Components/StudentStats";

import "./temp.css";

const TutoringDashboard = () => {
    const [tutorFilter, setTutorFilter] = useState("all")
    const [sessData, setSessData] = useState([]);
    const [stuData, setStuData] = useState([])
    const [loadedSess, setLoadedSess] = useState(false);
    const [loadedStu, setLoadedStu] = useState(false);

    const loadSessData = () => {
        var sessionDataURL = `https://raw.githubusercontent.com/themarkfullton/newPort/main/data/generated/sessions_${tutorFilter}.csv`
        const parseDate = d3.timeParse("%Y-%m-%d");
        d3.csv(sessionDataURL).then( (d) => {
            d.forEach((sess) => {
                sess.session_date = parseDate(sess.session_date);
                sess.hours_total = +sess.hours_total;
            });
            setTimeout(() => {}, 4000);
            setSessData(d);
            setTimeout(() => {}, 10000);
            setLoadedSess(true);
        });
    }

    const loadStuData = () => {
        d3.csv("https://raw.githubusercontent.com/themarkfullton/newPort/dashboard/data/generated/students_bootcamp.csv").then((s) => {
            s.forEach((stu) => {
                stu.number_students = +stu.number_students
            });
            setStuData(s);
            setLoadedStu(true);
        })
    }

    useEffect(() => {
        if (loadedSess == false){
            loadSessData();
        }
        if (loadedStu == false) {
            loadStuData();
        }
        return () => undefined;
    }, []);

    return (
    <div id="dashboard" className="dashboardWrapper">
        <div className="dashboardHeader">
            <ToggleButton text="All" filter="all" toggleFunction={setTutorFilter} toggleLoaded={setLoadedSess} loadData={loadSessData} />
            <ToggleButton text="Data" filter="data" toggleFunction={setTutorFilter} toggleLoaded={setLoadedSess} loadData={loadSessData} />
            <ToggleButton text="Web" filter="web" toggleFunction={setTutorFilter} toggleLoaded={setLoadedSess} loadData={loadSessData} />
        </div>
        <div className="dashboardBody">
            {loadedSess ? <SessionStats data={sessData} /> : "Loading Session"}
            {loadedStu ? <StudentStats data={stuData} filter={tutorFilter} /> : "Loading Students"}
            <div id="topicStats"></div>
        </div>
    </div>
    );
  }
  
  export default TutoringDashboard;
  