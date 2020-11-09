import ResultContainer from "../components/ResultContainer/ResultContainer";
import FilterContainer from "../components/FilterContainer/FilterContainer";

const Launch = ({data}) => {
    return (
            <>
                <FilterContainer />
                <ResultContainer data = {data} />
            </>
        );
}

export const getServerSideProps = async ctx => {
    // Fetch data from external API
    const {query} = ctx;
    console.log(query);
    if(query.launch_year){
        var api = `https://api.spaceXdata.com/v3/launches?limit=2&launch_year=${query.launch_year}`;
    }else{
        var api = `https://api.spaceXdata.com/v3/launches?limit=2`;
    }
    const res = await fetch(api);
    const data = await res.json()
    //console.log("fetch data",data);
    // Pass data to the page via props
    return { props: { data } }
}

export default Launch;