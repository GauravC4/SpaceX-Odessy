import Layout from "../components/Layout/Layout";
import FilterContainer from "../components/FilterContainer/FilterContainer";
import ResultContainer from "../components/ResultContainer/ResultContainer";

const Index = ({data}) => {
    return (
        <Layout>
            <FilterContainer />
            <ResultContainer data = {data} />
        </Layout>
    );
}

const extractData = (data) => {
    if(!data) return [];
    return data.map(entry => {
        return {
            flight_number: entry.flight_number,
            mission_name: entry.mission_name,
            mission_id: entry.mission_id || [],
            launch_year: entry.launch_year,
            mission_patch_small: entry.links?.mission_patch_small || null,
            launch_success: entry.rocket?.cores?.launch_success || false,
            land_success: entry.rocket?.cores?.land_success || false,
        }
    });
}

export const getServerSideProps = async ctx => {
    // Fetch data from external API
    const {query} = ctx;
    console.log(query);
    if(query.launch_year){
        var api = `https://api.spaceXdata.com/v3/launches?limit=10&launch_year=${query.launch_year}`;
    }else{
        var api = `https://api.spaceXdata.com/v3/launches?limit=10`;
    }
    const res = await fetch(api);
    const data = extractData(await res.json());
    
    // Pass data to the page via props
    return { props: { data } }
}

export default Index;