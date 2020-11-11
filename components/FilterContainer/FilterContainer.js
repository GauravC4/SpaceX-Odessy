import Link from 'next/link';
import styles from './FilterContainer.module.css';
import FilterInputGroup from '../Util/FilterInputGroup/FilterInputGroup';

const filterContainer = () => {
    const booleanFilters = [{label: "True", value: true}, {label: "False", value: false}];
    const LAUNCH_FILTER = "LAUNCH";
    const LAND_FILTER = "LAND";

    const onFilterSet = (name, filterType) => { 
        console.log(`${filterType} filter set with ${name}.`);
    }

    const onFilterClear = (filterType) => { 
        console.log(`${filterType} filter cleared.`);
    }

    return(
        <div className={styles.filter_container}>
            <h1>Filters</h1>
            <h3>Successful Launch</h3>
            <FilterInputGroup 
                filters = {booleanFilters}
                onFilterSet = {onFilterSet}
                onFilterClear = {onFilterClear}
                filterType = {LAUNCH_FILTER}
            />
            <h3>Successful Land</h3>
            <FilterInputGroup 
                filters = {booleanFilters}
                onFilterSet = {onFilterSet}
                onFilterClear = {onFilterClear}
                filterType = {LAND_FILTER}
            />

        </div>
    );
}

export default filterContainer;