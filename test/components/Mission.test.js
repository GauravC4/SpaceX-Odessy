import { render } from '@testing-library/react';
import Mission from '../../components/ResultContainer/Mission/Mission';

const mission = <Mission 
                    name="mission_name"
                    flight_number="asdf1234"
                    mission_ids={["#1", "#2"]}
                    launch_year="2014"
                    logo="dummy_logo"
                    launch_success="true"
                    land_success="true"
                />;

test('should render correct content', () => {
    const { getByText, getByAltText } = render(mission);
    
    getByAltText("mission_name logo");
    getByText("mission_name #asdf1234");
    getByText(/#1/);
    getByText(/#2/);
});