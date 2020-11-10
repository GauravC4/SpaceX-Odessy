import styles from './Layout.module.css';

const layout = (props) => {
    return <div className={styles.layout_container}> {props.children} </div>;
}

export default layout;