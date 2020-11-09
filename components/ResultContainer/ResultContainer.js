const resultContainer = ({data}) => {
    return <pre>DATA HERE{JSON.stringify(data, null, 4)}</pre>
}

export default resultContainer;