import Link from 'next/link'

const filterContainer = () => {
    return(
        <>
            <h1>Filters</h1>
            <Link href="/launch?launch_year=2014">
                <a>Year 2014</a>
            </Link>
        </>
    );
}

export default filterContainer;