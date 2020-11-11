import styles from './Mission.module.css';
const mission = (props) => {
    return (
        <div className={styles.mission_container}>
            <div className={styles.mission_card}>
                <div className={styles.mission_card_content}>
                    <img src={props.logo} alt={`${props.name} logo`}/>
                    <div>{`${props.name} #${props.flight_number}`}</div>
                    <span>Mission Ids : </span>
                    <div>
                        {
                            props.mission_ids.map(mission_id => <li>{mission_id}</li>)
                        }                                            
                    </div>
                    <div>Launch Year : {props.launch_year}</div>
                    <div>Successful Launch : {props.launch_success ? "Yes" : "False"}</div>
                    <div>Successful Landing : {props.land_success ? "Yes" : "False"}</div>
                </div>
            </div>
        </div>
    );
}

export default mission;