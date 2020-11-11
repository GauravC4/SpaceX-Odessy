import styles from './Mission.module.css';
import Info from '../../Util/Info/Info';

const mission = (props) => {
    return (
        <div className={styles.mission_container}>
            <div className={styles.mission_card}>
                <div className={styles.mission_card_content}>
                    <img src={props.logo} alt={`${props.name} logo`}/>
                    <div className={styles.label}>{`${props.name} #${props.flight_number}`}</div>
                    <Info label="Mission Ids" value=""/>
                    <div className={styles.mission_ids}>
                        {
                            props.mission_ids.map(mission_id => <li key={mission_id}>{mission_id}</li>)
                        }                                            
                    </div>
                    <Info label="Launch Year" value={props.launch_year}/>
                    <Info label="Successful Launch" value={props.launch_success ? "Yes" : "False"}/>
                    <Info label="Successful Landing" value={props.land_success ? "Yes" : "False"}/>                  
                </div>
            </div>
        </div>
    );
}

export default mission;