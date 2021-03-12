import ProgrammerPic from "../../Containers/WorkHistory/programmer.png";
import TAPic from "../../Containers/WorkHistory/ta.png";

function WHComponent(props) {
    var picVal;
    var fullTitle;
    var errorCheck;

    switch(props.location.title){
        case "data":
            errorCheck = false;
            picVal = ProgrammerPic;
            fullTitle = "Data Engineer";
            break;
        case "web":
            errorCheck = false;
            picVal = ProgrammerPic;
            fullTitle = "Full Stack Web Dev";
            break;
        case "ta":
            errorCheck = false;
            picVal = TAPic;
            fullTitle = "Teacher's Assistant & Tutor";
            break;
        default:
            errorCheck = true;
    }

    return ((errorCheck) ? (
        <div className="wHComponentWrapper">
            <p>Click a title to see more about the position</p>
        </div>
    ) : (
        <div className="wHComponentWrapper">
            <div className="wHImageSide">
                <img className="wHImageImage" src={picVal} />
            </div>
            <div className="wHTextSide">
                <div className="wHTitle">
                    {fullTitle}
                </div>
                <div className="wHTime">
                    {props.location.time}
                </div>
                <div className="wHBullets">
                    <table>
                    {props.location.bullets.map((bull, idx) => {
                        return (<tr key={idx}>
                            <td>{bull[0]}</td>
                            <td>{bull[1]}</td>
                        </tr>);
                    })}
                    </table>
                </div>
            </div>
        </div>
    ))
}

export default WHComponent;