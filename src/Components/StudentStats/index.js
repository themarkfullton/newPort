import * as d3 from "d3";

const StudentStats = (props) => {
    const {data, filter} = props;
    const currData = data.filter(row => row.bootcamp == filter.toUpperCase())[0]
    
    return (
        <div id="studentStatsGraph">
            <h3>{filter.charAt(0).toUpperCase() + filter.slice(1)}</h3>
            <h2>{currData.number_students}</h2>
            <h3>Students</h3>
        </div>
    )
}

export default StudentStats;