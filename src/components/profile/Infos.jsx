import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {FirstInfo} from '../../styles/profile';

function Infos() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    accountCredentials: {
      name: '',
      photo: '',
      email: '',
      country: '',
    },
    accountDesc: '',
  });

  useEffect(() => {
    const recoverUserDB = JSON.parse(localStorage.getItem('user-register'));
    if (recoverUserDB) setProfile(recoverUserDB[0]);
  }, []);

  const handleDelete = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <>
      <img
        src={profile.accountCredentials.photo}
        alt="Imagem de Perfil"
      />
      <FirstInfo>
        <span>{profile.accountCredentials.name}</span>
        <div>
          <span>Descrição</span>
          {profile.accountDesc ? (
            <p>{profile.accountDesc}</p>
            ) : (
              <span>Sem Descrição</span>
              )}
          <span>{profile.accountCredentials.email}</span>
          <span>{profile.accountCredentials.country}</span>
        </div>
        <button
          type="button"
          onClick={handleDelete}
        >
          Deletar Perfil
        </button>
      </FirstInfo>
    </>
  );
}

export default Infos;
