import styles from './Info.module.css';
const info = (props) => {
    return(
        <div className={styles.margin}>
            <span className={styles.label}>{props.label} : </span>
            <span className={styles.value}>{props.value}</span>
        </div>
    );
}

export default info;