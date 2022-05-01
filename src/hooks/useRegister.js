import {useState, useEffect} from 'react';

function useRegister() {
  const [register, setRegister] = useState({});

  useEffect(() => {
    const storage = () => {
      return localStorage.setItem('user-register', JSON.stringify(register));
    };

    storage();
  }, [register]);

  return setRegister;
}

export default useRegister;
