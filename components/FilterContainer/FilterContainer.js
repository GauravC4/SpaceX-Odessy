import Link from 'next/link';
import styles from './FilterContainer.module.css';
import FilterInputGroup from '../Util/FilterInputGroup/FilterInputGroup';

const filterContainer = () => {
    const booleanFilters = [{label: "True", value: true}, {label: "False", value: false}];
    const LAUNCH_FILTER = "LAUNCH";
    const LAND_FILTER = "LAND";
    const YEAR_FILTER = "YEAR";
    const START_YEAR = 2006;
    const CURR_YEAR = new Date().getFullYear();

    let yearFilters = [];
    for(let i = START_YEAR; i <= CURR_YEAR; i++){
        yearFilters.push({label: i+"", value: i});
    } 

    const onFilterSet = (name, filterType) => { 
        console.log(`${filterType} filter set with ${name}.`);
    }

    const onFilterClear = (filterType) => { 
        console.log(`${filterType} filter cleared.`);
    }

    return(
        <div className={styles.filter_container}>
            <h1>Filters</h1>
            <h3>Launch year</h3>
            <FilterInputGroup 
                filters = {yearFilters}
                onFilterSet = {onFilterSet}
                onFilterClear = {onFilterClear}
                filterType = {YEAR_FILTER}
            />
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