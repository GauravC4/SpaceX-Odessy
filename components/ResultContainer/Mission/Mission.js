import styles from './Mission.module.css';
const mission = (props) => {
    return (
        <div className={styles.mission_container}>
            <div className={styles.mission_card}>{props.name}</div>
        </div>
    );
}

export default mission;