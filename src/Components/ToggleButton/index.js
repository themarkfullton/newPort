const ToggleButton = (props) => {
    const handleClick = () => {
        setTimeout(props.toggleFunction(props.filter), 1000)
        props.toggleLoaded(false);
        props.loadData();
    }

    return (
        <button onClick={handleClick}>{props.text}</button>
    )
}

export default ToggleButton;