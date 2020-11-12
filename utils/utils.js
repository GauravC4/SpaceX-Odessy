export const getApiUrl = (query) => {
    console.log("getapi query", query);
    const BASE_URL = "https://api.spaceXdata.com/v3/launches?limit=100";
    if(!query) return BASE_URL;

    let apiUrl = BASE_URL;
    if(query.launch_success) apiUrl += `&launch_success=${query.launch_success}`;
    if(query.land_success) apiUrl += `&land_success=${query.land_success}`;
    if(query.launch_year) apiUrl += `&launch_year=${query.launch_year}`;

    return apiUrl;
}

export const booToString = (val) => {
    if(val === null || val === undefined) return "";
    if(val) return "true";
    return "false";
}