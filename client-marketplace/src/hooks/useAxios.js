import { useState, useEffect } from 'react';
import axios from 'axios';

function useAxios(url, method = 'GET', body = null, options = { headers: { 'Content-Type': 'application/json' } }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(url, { method, body, ...options });
        setData(result.data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [url, method, body, options]);

  const refetch = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await axios(url, { method, body, ...options });
      setData(result.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return { data, loading, error, refetch };
}
export default useAxios;
