const filterInput = (props) => {
    const color = props.isActive ? "green" : "red";
    return(
        <button onClick={props.click} style={{backgroundColor: color}}>{props.label}</button>
    );
}

export default filterInput;