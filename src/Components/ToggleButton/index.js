const ToggleButton = (props) => {
    const handleClick = () => {
        setTimeout(() => {}, 4000);
        props.toggleFunction(props.filter)
        setTimeout(props.toggleLoaded(false), 50000);
        props.loadData();
    }

    return (
        <button onClick={handleClick}>{props.text}</button>
    )
}

export default ToggleButton;