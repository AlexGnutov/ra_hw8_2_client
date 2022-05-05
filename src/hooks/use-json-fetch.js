import {useEffect, useRef, useState} from "react";

export default function useJsonFetch(url, opts, cancellable = false) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const controllerRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            // Check if url is provided
            if (!url) {
                setError('No URL provided');
                return;
            }

            if (cancellable) {
                if (controllerRef.current) {
                    controllerRef.current.abort()
                }
                controllerRef.current = new AbortController();
            }

            setError(null);
            setData(null);
            setLoading(true);

            let response;
            try {
                response = await fetch(url, {signal: controllerRef.current?.signal});
                if (!response.ok) {
                    setError(response.status + ' ' + response.statusText);
                } else {
                    try {
                        const data = await response.json();
                        setData(data);
                    } catch (e) {
                        setError('JSON error: ' + e.message);
                    }
                }
            } catch (e) { // Catch fetch error
                setError('Network error');
            } finally {
                setLoading(false);
                controllerRef.current = null;
            }
        }
        fetchData();
    }, [url, cancellable]);
    return [{data, loading, error}];
}
