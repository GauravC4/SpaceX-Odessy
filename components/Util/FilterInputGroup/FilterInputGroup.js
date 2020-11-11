import FilterInput from './FilterInput/FilterInput';
import {useState} from 'react';
import styles from "./FilterInputGroup.module.css";

const filterInputGroup = (props) => {

    const getInitialFilterActiveStatus = (filters) => {
        // no filter applied
        return filters.reduce((filterActiveStatus, filter) => {
            filterActiveStatus[filter] = false;
            return filterActiveStatus;
        }, {});
    }

    const [filterActiveStatus, setFilterActiveStatus] = useState(
            getInitialFilterActiveStatus(
                props.filters.map(filter => filter.label)
            )
        );

    const toggleActiveStatus = (name, filterType) => {
        // if same filter is hit twice, clear it else apply it and clear the rest        
        const newFilterActiveStatus = getInitialFilterActiveStatus(Object.keys(filterActiveStatus));
        if(!filterActiveStatus[name]){            
            newFilterActiveStatus[name] = true;
            props.onFilterSet(name, filterType);
        }else{
            newFilterActiveStatus[name] = false;
            props.onFilterClear(filterType);
        }
        setFilterActiveStatus(newFilterActiveStatus);
    }

    const filterInputs = props.filters.map(filter => 
        <FilterInput 
            key = {filter.label}
            label = {filter.label}
            value = {filter.value}
            click = {() => toggleActiveStatus(filter.label, props.filterType)}
            isActive = {filterActiveStatus[filter.label]}
        />
    );

    return <div className={styles.filter_group}>{filterInputs}</div>;
}

export default filterInputGroup;