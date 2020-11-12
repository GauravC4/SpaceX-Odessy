import { booToString, getApiUrl} from '../utils/utils';

test('should convert boolean to string', () => {
    expect(booToString(true)).toMatch("true");
    expect(booToString(false)).toMatch("false");
    expect(booToString(null)).toMatch("");
    expect(booToString(undefined)).toMatch("");
});

test('should get api url for given query params', () => {
    const BASE_URL = "https://api.spaceXdata.com/v3/launches?limit=100";

    expect(getApiUrl()).toMatch(BASE_URL);
    expect(getApiUrl(null)).toMatch(BASE_URL);
    expect(getApiUrl({launch_success: "true"})).toMatch(BASE_URL+"&launch_success=true");
    expect(getApiUrl({land_success: "true"})).toMatch(BASE_URL+"&land_success=true");
    expect(getApiUrl({launch_year: "2014"})).toMatch(BASE_URL+"&launch_year=2014");
    expect(getApiUrl({
        launch_success: "false",
        land_success: "false",
        launch_year: "2016",
    })).toMatch(BASE_URL+"&launch_success=false&land_success=false&launch_year=2016");
});
