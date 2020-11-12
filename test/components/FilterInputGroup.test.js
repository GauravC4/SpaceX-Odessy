import { render, fireEvent } from '@testing-library/react';
import FilterInputGroup from '../../components/Util/FilterInputGroup/FilterInputGroup';

const filterInputGroup = <FilterInputGroup 
                            filters = {[{label: "2014", value: 2014}, {label: "2015", value: 2015}]}
                            onFilterSet = {() => 1}
                            onFilterClear = {() => 2}
                            filterType = "year_filter"
                        />;

test('should render content', () => {
    const { getByText } = render(filterInputGroup);
    
    getByText("2014");
    expect(getByText("2014").classList.contains('btn')).toBeTruthy();
    
    getByText("2015");
    expect(getByText("2015").classList.contains('btn')).toBeTruthy();
});         

test('should toggle active status on click, only one can be active at a time', () => {
    const { getByText } = render(filterInputGroup);
    
    fireEvent.click(getByText("2014"));
    expect(getByText("2014").classList.contains('active')).toBeTruthy();

    fireEvent.click(getByText("2015"));
    expect(getByText("2015").classList.contains('active')).toBeTruthy();
    expect(getByText("2014").classList.contains('active')).toBeFalsy();

    fireEvent.click(getByText("2015"));
    expect(getByText("2014").classList.contains('active')).toBeFalsy();
});