import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      let res = await fetch(url);
  
      setLoading(false);
      setData(await res.json());
    }
    try {
      fetchResources();
    } catch(error) {
      setLoading(false);
      setError(true);
    }}, [url]);

  return { data, loading, error };
};

export default useFetch;
