import React, {useEffect, useState } from "react";
import * as d3 from "d3";
import ToggleButton from "../../Components/ToggleButton";
import TopicStats  from "../../Components/TopicStats";
import StudentStats from "../../Components/StudentStats";
import SessionStats from "../../Components/SessionStats";
import "./dash.css";

const TutoringDashboard = () => {
    const [tutorFilter, setTutorFilter] = useState("all")
    const [sessData, setSessData] = useState([]);
    const [stuData, setStuData] = useState([]);
    const [topicData, setTopicData] = useState([]);
    const [loadedSess, setLoadedSess] = useState(false);
    const [loadedStu, setLoadedStu] = useState(false);
    const [loadedTopic, setLoadedTopic] = useState(false);

    const loadSessData = () => {
        var sessionDataURL = `https://raw.githubusercontent.com/themarkfullton/newPort/main/data/generated/sessions_${tutorFilter}.csv`
        const parseDate = d3.timeParse("%Y-%m-%d");
        d3.csv(sessionDataURL).then( (d) => {
            d.forEach((sess) => {
                sess.session_date = parseDate(sess.session_date);
                sess.hours_total = +sess.hours_total;
            });
            setSessData(d);
            setLoadedSess(true);
        });
    }

    const loadStuData = () => {
        d3.csv("https://raw.githubusercontent.com/themarkfullton/newPort/dashboard/main/generated/students_bootcamp.csv").then((s) => {
            s.forEach((stu) => {
                stu.number_students = +stu.number_students
            });
            setStuData(s);
            setLoadedStu(true);
        })
    }

    const loadTopicData = () => {
        var topicDataURL = `https://raw.githubusercontent.com/themarkfullton/newPort/main/data/generated/topics_${tutorFilter}.csv`
        d3.csv(topicDataURL).then((t) => {
            t.forEach((topic) => {
                topic.topic_count = +topic.topic_count
            });
            setTopicData(t);
            setLoadedTopic(true);
        })
    }

    const toggleFilter = (filter) => {
        setTimeout(() => {}, 4000);
        setTutorFilter(filter);
        setLoadedSess(false);
        setLoadedStu(false);
        setLoadedTopic(false);
        setTimeout(() => {}, 5000)
        loadPage();
    }

    const loadPage = () => {
        if (loadedSess == false){
            loadSessData();
        }
        if (loadedStu == false) {
            loadStuData();
        }
        if (loadedTopic == false){
            loadTopicData();
        }
    }

    loadPage();

    return (
    <div id="dashboard" className="dashboardWrapper">
        <div className="dashboardHeader">
            <ToggleButton text="Total" filter="all" toggleFunction={toggleFilter} currFilter={tutorFilter}  />
            <ToggleButton text="Data" filter="data" toggleFunction={toggleFilter} currFilter={tutorFilter} />
            <ToggleButton text="Web" filter="web" toggleFunction={toggleFilter}  currFilter={tutorFilter} />
        </div>
        <div className="dashboardBody">
            <div className="dashRow">
                {loadedTopic ? <TopicStats data={topicData} /> : "Loading Topics"}
                {loadedStu ? <StudentStats data={stuData} filter={tutorFilter} /> : "Loading Students"}
            </div>
            <div className="dashRow">
                {loadedSess ? <SessionStats data={sessData} filter={tutorFilter} /> : "Loading Session"}
            </div>
        </div>
    </div>
    );
  }
  
  export default TutoringDashboard;
  