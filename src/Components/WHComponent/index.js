import ProgrammerPic from "../../Containers/WorkHistory/programmer.png";
import TAPic from "../../Containers/WorkHistory/ta.png";

function WHComponent(props) {
    var picVal;
    var fullTitle;
    switch(props.location.title){
        case "data":
            picVal = ProgrammerPic;
            fullTitle = "Data Engineer";
            break;
        case "web":
            picVal = ProgrammerPic;
            fullTitle = "Full Stack Web Dev";
            break;
        case "ta":
            picVal = TAPic;
            fullTitle = "Teacher's Assistant & Tutor";
            break;
        default:
            picVal = ProgrammerPic;
    }

    return (
        <div className="wHComponentWrapper">
            <div className="wHImageSide">
                <img className="wHImageImage" src={picVal} />
            </div>
            <div className="wHTextSide">
                <div className="wHTitle">
                    {fullTitle}
                </div>
                <div className="wHDesc" dangerouslySetInnerHTML={{__html: props.location.desc}}>
                    
                </div>
                <div className="wHBullets">
                    <ul>
                    {props.location.bullets.map((bull, idx) => {
                        return (
                            <li key={idx}>
                                {bull}
                            </li>
                        );
                    })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WHComponent;