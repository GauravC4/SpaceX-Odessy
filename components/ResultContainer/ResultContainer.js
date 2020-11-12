import Mission from './Mission/Mission';
import styles from './ResultContainer.module.css';

const resultContainer = ({data}) => {
    if(!data || data.length === 0){
        return (
            <div className={styles.result_container}>
                <p className={styles.error}>No data found !</p>
            </div>
        );
    }

    const missions = data.map(mission => 
    <Mission 
        key={mission.mission_name}
        name={mission.mission_name}
        flight_number={mission.flight_number}
        mission_ids={mission.mission_id}
        launch_year={mission.launch_year}
        logo={mission.mission_patch_small}
        launch_success={mission.launch_success}
        land_success={mission.land_success}
    />
    );
    return <div className={styles.result_container}>{missions}</div>;
}

export default resultContainer;