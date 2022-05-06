import {useState, useEffect} from 'react';

function useValidate() {
  const [login, setLogin] = useState({});
  const [authorized, setAuth] = useState(false);

  useEffect(() => {
    const recoverUserRegister = JSON.parse(
        localStorage.getItem('user-register'),
    );
    setAuth(false);

    if (recoverUserRegister !== null) {
      const findUser = recoverUserRegister.find(
          (user) => user.accountCredentials.email === login.inputEmail,
      );
      setAuth(false);

      if (findUser) {
        const checkPassword = findUser
            .accountCredentials.password === login.inputPassword;
        setAuth(false);

        if (checkPassword) {
          setAuth(true);
        }
      }
    }
  }, [login]);

  return [authorized, setLogin];
}

export default useValidate;
