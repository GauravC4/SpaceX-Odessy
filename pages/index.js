import Layout from "../components/Layout/Layout";
import FilterContainer from "../components/FilterContainer/FilterContainer";
import ResultContainer from "../components/ResultContainer/ResultContainer";
import { getApiUrl, booToString } from "../utils/utils";
import Head from "next/head";

const Index = ({data}) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta
                name="description"
                content="SpaceX mission details filtered by year, launch and land success."
                />
                <meta name="robots" content="index,follow" />
                <title>SpaceX Odyssey</title>
            </Head>
            <Layout>
                <FilterContainer />
                <ResultContainer data = {data} />
            </Layout>
        </>
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
            launch_success: booToString(entry.launch_success),
            land_success: booToString(entry.land_success),
        }
    });
}

export const getServerSideProps = async ctx => {
    // Fetch data from external API
    const {query} = ctx;
    const apiUrl = getApiUrl(query);
    const res = await fetch(apiUrl);
    const data = extractData(await res.json());
    // Pass data to the page via props
    return { props: { data } }
}

export default Index;