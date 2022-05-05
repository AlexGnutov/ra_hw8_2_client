import useJsonFetch from "../hooks/use-json-fetch";
import {useState} from "react";

function LoaderComponent(props) {
    const [url, setUrl] = useState(null);
    const [{data, loading, error}] = useJsonFetch(url, {}, true);

    const onDataClick = () => {
        setUrl(process.env.REACT_APP_HOST_URL + 'data');
    }
    const onErrorClick = () => {
        setUrl(process.env.REACT_APP_HOST_URL + 'error');
    }
    const onDelayClick = () => {
        setUrl(process.env.REACT_APP_HOST_URL + 'loading');
    }

    return (
        <div className={'loader-component'}>
            <button onClick={onDataClick}>Data request</button>
            <button onClick={onErrorClick}>Error request</button>
            <button onClick={onDelayClick}>Delayed request</button>
            <div>Data: {JSON.stringify(data)} Error: {JSON.stringify(error)}</div>
            <div>{loading ? 'loading' : '-'}</div>
        </div>
    )
}

export default LoaderComponent;
