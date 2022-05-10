import React, {useState, useEffect} from 'react';
import AlternativeHeader from '../components/AlternativeHeader';
import Advertising from '../components/Advertising';
import Infos from '../components/profile/Infos';
import {
  ProfileStyled,
  ProfileInfos,
  ProfilePanel,
  ProfilePanelBox,
  NoProfileStyled,
} from '../styles/profile';

function Profile() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const recoverUserDB = JSON.parse(localStorage.getItem('user-register'));
    if (recoverUserDB) setLogged(true);
  }, []);

  if (!logged) {
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
          <Infos />
        </ProfileInfos>
        <ProfilePanel>
          <ProfilePanelBox>
            <div>
              <span>Insígnias</span>
              <button
                type="button"
              >
                <span className="material-icons-outlined">
                  arrow_drop_down
                </span>
              </button>
            </div>
            {/* {profile.accountFavorites.map} */}
          </ProfilePanelBox>
          <ProfilePanelBox>
            <div>
              <span>Favoritos</span>
              <button
                type="button"
              >
                <span className="material-icons-outlined">
                  arrow_drop_down
                </span>
              </button>
            </div>
            {/* {profile.accountFavorites.map} */}
          </ProfilePanelBox>
          <ProfilePanelBox>
            <div>
              <span>Para Assistir</span>
              <button
                type="button"
              >
                <span className="material-icons-outlined">
                  arrow_drop_down
                </span>
              </button>
            </div>
            {/* {profile.accountFavorites.map} */}
          </ProfilePanelBox>
          <ProfilePanelBox>
            <div>
              <span>Assistindo</span>
              <button
                type="button"
              >
                <span className="material-icons-outlined">
                  arrow_drop_down
                </span>
              </button>
            </div>
            {/* {profile.accountFavorites.map} */}
          </ProfilePanelBox>
          <ProfilePanelBox>
            <div>
              <span>Já vistos</span>
              <button
                type="button"
              >
                <span className="material-icons-outlined">
                  arrow_drop_down
                </span>
              </button>
            </div>
            {/* {profile.accountFavorites.map} */}
          </ProfilePanelBox>
        </ProfilePanel>
      </ProfileStyled>
    </>
  );
}

export default Profile;
