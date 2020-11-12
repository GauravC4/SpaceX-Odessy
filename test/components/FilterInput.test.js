import { render, fireEvent } from '@testing-library/react';
import FilterInput from '../../components/Util/FilterInputGroup/FilterInput/FilterInput';

let active = true;
const getFilterInput = () => {
    return <FilterInput 
    label = "2014"
    value = "2014"
    click = {() => 1}
    isActive = {active} />;
}

test('should render content', () => {
    const { getByText } = render(getFilterInput());
    getByText("2014");
    expect(getByText("2014").classList.contains('btn')).toBeTruthy();
});

test('should change active status on click', () => {
    const { getByText, rerender } = render(getFilterInput());
    
    fireEvent.click(getByText("2014"));
    active = !active;
    rerender(getFilterInput());
    expect(getByText("2014").classList.contains('active')).toBeFalsy();

    fireEvent.click(getByText("2014"));
    active = !active;
    rerender(getFilterInput());
    expect(getByText("2014").classList.contains('active')).toBeTruthy();
});
