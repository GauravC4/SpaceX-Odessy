import Link from 'next/link';
import styles from './FilterContainer.module.css';

const filterContainer = () => {
    return(
        <div className={styles.filter_container}>
            <h1>Filters</h1>
            <Link href="?launch_year=2014">
                <a>Year 2014</a>
            </Link>
        </div>
    );
}

export default filterContainer;