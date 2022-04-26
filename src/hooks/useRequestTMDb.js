import {useState, useEffect} from 'react';
import requestTMDb from '../services/TMDbAPI';

function useRequestTMDb() {
  const [request, setRequest] = useState('');
  const [result, setResult] = useState([]);

  useEffect(() => {
    const requestAPI = async () => {
      const data = await requestTMDb(request);
      setResult(data);
    };

    requestAPI();
  }, [request]);

  return [result, setRequest];
}

export default useRequestTMDb;
