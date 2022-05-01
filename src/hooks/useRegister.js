import {useState, useEffect} from 'react';

function useRegister() {
  const [infos, setInfos] = useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    const storage = () => {
      return localStorage.setItem('user-register', JSON.stringify(infos));
    };

    storage();
  }, [infos]);

  return setInfos;
}

export default useRegister;
