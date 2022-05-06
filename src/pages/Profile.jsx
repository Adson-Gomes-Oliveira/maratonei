import React, {useState, useContext} from 'react';
import MaratoneiContext from '../context/MaratoneiContext';
import AlternativeHeader from '../components/AlternativeHeader';
import Advertising from '../components/Advertising';
import {
  ProfileStyled,
  ProfileInfos,
  ProfilePanel,
  FirstInfo,
  NoProfileStyled,
} from '../styles/profile';

function Profile() {
  const [edit, setEdit] = useState(false);
  const {profile} = useContext(MaratoneiContext);

  const handleClick = () => {
    setEdit(true);
    console.log(edit);
  };

  if (!profile.accountCredentials) {
    return (
      <>
        <AlternativeHeader />
        <Advertising />
        <NoProfileStyled>
          <span>Faça login ou cadastre-se para acessar</span>
        </NoProfileStyled>
      </>
    );
  }
  return (
    <>
      <AlternativeHeader />
      <Advertising />
      <ProfileStyled>
        <ProfileInfos>
          <img
            src={profile.accountCredentials.photo}
            alt="Imagem de Perfil"
          />
          <FirstInfo>
            <button
              type="button"
              onClick={handleClick}
            >
              Editar Perfil
            </button>
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
        </ProfileInfos>
        <ProfilePanel>

        </ProfilePanel>
      </ProfileStyled>
    </>
  );
}

export default Profile;
