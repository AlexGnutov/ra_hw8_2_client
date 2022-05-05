import useJsonFetch from "../hooks/use-json-fetch";

function TestComponent(props) {
    const {url} = props;
    const [{data, loading, error}] = useJsonFetch(url, {});

    return (
        <div className={'test-component'}>
            <div>Data: {JSON.stringify(data)} Error: {JSON.stringify(error)}</div>
            <div>{loading ? 'loading' : '-'}</div>
        </div>
    )
}

export default TestComponent;
