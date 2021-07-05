const ToggleButton = (props) => {
    const {filter, text, currFilter} = props;
    const checker = {
        "Data": "data",
        "Web": "web",
        "Total": "all"
    }
    const thisClassName = checker[text] == currFilter ? "currentData" : "notSelected";
    const handleClick = () => {
        props.toggleFunction(filter)
    }

    return (
        <button className={thisClassName} onClick={handleClick}>{text}</button>
    )
}

export default ToggleButton;