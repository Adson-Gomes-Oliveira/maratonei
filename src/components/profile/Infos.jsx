import React, {useContext} from 'react';
import MaratoneiContext from '../../context/MaratoneiContext';
import {FirstInfo} from '../../styles/profile';

function Infos() {
  const {profile} = useContext(MaratoneiContext);

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
      </FirstInfo>
    </>
  );
}

export default Infos;
