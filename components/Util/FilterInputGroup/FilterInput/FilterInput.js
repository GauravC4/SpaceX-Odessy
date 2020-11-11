import styles from './FilterInput.module.css';

const filterInput = (props) => {
    const buttonClasses = styles.btn + (props.isActive ? (" "+styles.active) : "");  
    return(
        <div className={styles.input_container}>
            <button 
                onClick={props.click} 
                className={buttonClasses}
            >
                {props.label}
            </button>
        </div>
    );
}

export default filterInput;