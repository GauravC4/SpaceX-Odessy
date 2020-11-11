import Mission from './Mission/Mission';
import styles from './ResultContainer.module.css';

const resultContainer = ({data}) => {
    const missions = data.map(mission => 
    <Mission 
        key={mission.mission_name}
        name={mission.mission_name}
        flight_number={mission?.flight_number}
        mission_ids={mission?.mission_id || []}
        launch_year={mission?.launch_year}
        logo={mission?.links?.mission_patch_small || null}
        launch_success={mission?.rocket?.cores?.launch_success || false}
        land_success={mission?.rocket?.cores?.land_success || false}
    />
    );
    return <div className={styles.result_container}>{missions}</div>;
}

export default resultContainer;