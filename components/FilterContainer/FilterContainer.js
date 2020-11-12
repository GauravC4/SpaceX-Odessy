import styles from './FilterContainer.module.css';
import FilterInputGroup from '../Util/FilterInputGroup/FilterInputGroup';
import { useRouter } from 'next/router'
import { useState } from 'react';

const filterContainer = () => {
    const booleanFilters = [{label: "true", value: true}, {label: "false", value: false}];
    const LAUNCH_FILTER = "launch_success";
    const LAND_FILTER = "land_success";
    const YEAR_FILTER = "launch_year";
    const START_YEAR = 2006;
    const CURR_YEAR = new Date().getFullYear();
    const router = useRouter();

    const [query, setQuery] = useState({});

    let yearFilters = [];
    for(let i = START_YEAR; i <= CURR_YEAR; i++){
        yearFilters.push({label: i+"", value: i});
    } 

    const onFilterSet = (name, filterType) => { 
        console.log(`${filterType} filter set with ${name}.`);
        let newQuery = {...query};
        newQuery[filterType] = name;
        setQuery(newQuery);
        updateRoute(newQuery);
    }

    const onFilterClear = (filterType) => { 
        console.log(`${filterType} filter cleared.`);
        let newQuery = {...query};
        delete newQuery[filterType];        
        setQuery(newQuery);
        updateRoute(newQuery);
    }

    const updateRoute = (query) => {
        console.log("query obj", query);
        router.replace({
            pathname: "/",
            query: query
        });
    }

    return(
        <div className={styles.filter_container}>
            <h1>Filters</h1>
            <div className={styles.label}>Launch year</div>
            <hr />
            <FilterInputGroup 
                filters = {yearFilters}
                onFilterSet = {onFilterSet}
                onFilterClear = {onFilterClear}
                filterType = {YEAR_FILTER}
            />
            <div className={styles.label}>Successful Launch</div>
            <hr />
            <FilterInputGroup 
                filters = {booleanFilters}
                onFilterSet = {onFilterSet}
                onFilterClear = {onFilterClear}
                filterType = {LAUNCH_FILTER}
            />
            <div className={styles.label}>Successful Land</div>
            <hr />
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