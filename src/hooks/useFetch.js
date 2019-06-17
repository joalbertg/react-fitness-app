import { useState, useEffect } from 'react';

import asyncGet from '../httpClient/asyncGet';

const useFetch = url => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const searchData = async () => {
      await asyncGet(url).then(res => {
        const { data, loading, error } =   res;
        setLoading(loading);
        setError(error);
        setData(data);
      });
    }
    searchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
