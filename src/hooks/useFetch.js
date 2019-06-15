import { useState, useEffect } from 'react';

import api from '../config/api';

const useFetch = url => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      await api.get(url).then(res => {
        setLoading(false);
        setData(res.data);
      }).catch(error => {
        console.error(error);
        setLoading(false);
        setError(true);
      });
    }
    fetchResources();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
