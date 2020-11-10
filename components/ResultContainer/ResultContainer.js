import Mission from './Mission/Mission';
import styles from './ResultContainer.module.css';

const resultContainer = ({data}) => {
    let missions = data.map(mission => <Mission name={mission.mission_name}/>);
    return <div className={styles.result_container}>{missions}</div>;
}

export default resultContainer;