import React from "react";
import ReactWordcloud from 'react-wordcloud';

const TopicStats = (props) =>{
    const {data, wcWidth} = props;

    const words = []

    data.forEach(row => {
        let temp = {}
        temp.text = row.primary_topic;
        temp.value = parseInt(row.topic_count);
        words.push(temp);
    })

    const callbacks = {
        getWordColor: word => {
            if (word.value > 20){
                return "goldenrod";
            } else if (word.value > 15) {
                return "#fff"
            } else if (word.value > 7) {
                return "#d7f0ff"
            } else if (word.value > 4) {
                return "#c4e9ff"
            } else {
                return "#b0e2ff"
            }
        }
    }

    const options = {
    rotations: 2,
    rotationAngles: [-90, 0],
    };
    
    return (
        <div id="topicsGraph">
            <ReactWordcloud
                callbacks={callbacks}
                options={options}
                words={words} />
        </div>
    )
}

export default TopicStats;