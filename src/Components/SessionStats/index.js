import React, {useEffect, useState} from "react";
import * as d3 from "d3";

const SessionStats = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const {data, filter} = props;

    const margin = { top: 40, right: 80, bottom: 60, left: 50 },
        width = 800 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom,
        color = "white";

    const yMinValue = d3.min(data, (d) => d.hours_total);
    const yMaxValue = d3.max(data, (d) => d.hours_total);

    const getX = d3
        .scaleTime()
        .domain(d3.extent(data, (d) => d.session_date))
        .range([0, width]);
    
    const getY = d3
        .scaleLinear()
        .domain([yMinValue - 1, yMaxValue + 2])
        .range([height, 0]);

    const getXAxis = (ref) => {
        const xAxis = d3.axisBottom(getX);
        d3.select(ref).call(xAxis.tickFormat(d3.timeFormat("%Y-%m")))
        .selectAll("text")
        .attr("transform", "translate(0,25) rotate(-45)")
        
    }

    const getYAxis = (ref) => {
        const yAxis = d3.axisLeft(getY).tickSize(-width).tickPadding(7);
        d3.select(ref).call(yAxis);
    }

    const linePath = d3
        .line()
        .x((d) => getX(d.session_date))
        .y((d) => getY(d.hours_total))
        .curve(d3.curveMonotoneX)(data);
    
    const areaPath = d3
        .area()
        .x((d) => getX(d.session_date))
        .y0((d) => getY(d.hours_total))
        .y1(() => getY(yMinValue - 1))
        .curve(d3.curveMonotoneX)(data);

    const handleMouseMove = (e) => {
        const bisect = d3.bisector((d) => d.session_date).left,
            x0 = getX.invert(d3.pointer(e, this)[0]),
            index = bisect(data, x0, 1);
        setActiveIndex(index);
    }

    const handleMouseLeave = () => {
        setActiveIndex(null);
    }

    return (
        <div id="sessionGraph">
            <h3>Daily Hours Tutored - {filter.charAt(0).toUpperCase() + filter.slice(1)}</h3>
            <svg
              viewBox={`0 0 ${width + margin.left + margin.right} 
                              ${height + margin.top + margin.bottom}`}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
          >
              <g className="axis" ref={getYAxis} />
              <g
                  className="axis xAxis"
                  ref={getXAxis}
                  transform={`translate(0,${height})`}
              />
              <path fill={color} d={areaPath} opacity={0.45} />
              <path strokeWidth={2} fill="none" stroke={color} d={linePath} />

              {data.map((sess, idx) => {
                  return (
                      <g key={idx}>
                          <text
                              fill="goldenrod"
                              stroke="goldenrod"
                              x={getX(sess.session_date)}
                              y={getY(sess.hours_total) - 20}
                              textAnchor="middle"
                              style={{ transition: "ease-out .2s" }}
                          >
                              {idx === activeIndex ? sess.hours_total : ""}
                          </text>
                          <circle
                              cx={getX(sess.session_date)}
                              cy={getY(sess.hours_total)}
                              r={idx === activeIndex ? 6 : 0}
                              fill={idx === activeIndex ? "goldenrod" : color}
                              strokeWidth={idx === activeIndex ? 2 : 0}
                              stroke="#fff"
                              style={{ transition: "ease-out .1s" }}
                          />
                      </g>
                  );
              })}
          </svg>
        </div>
    )
}

export default SessionStats;