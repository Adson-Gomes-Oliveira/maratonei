import {useState, useEffect} from 'react';

function useRegister() {
  const [register, setRegister] = useState({});

  useEffect(() => {
    if (Object.keys(register).length > 0) {
      const profileRegister = {
        accountCredentials: {
          email: register.inputEmail,
          password: register.inputPassword,
          name: register.inputName,
          country: register.selectCountry,
          social: register.inputSocial,
          photo: register.inputPhoto,
        },
        accountFavorites: [],
        accountWatch: {
          toWatch: {},
          watch: {},
          watched: {},
        },
        accountBadges: {},
      };

      const storage = () => {
        return localStorage.setItem(
            'user-register', JSON.stringify([profileRegister]),
        );
      };

      storage();
    }
  }, [register]);

  return setRegister;
}

export default useRegister;
