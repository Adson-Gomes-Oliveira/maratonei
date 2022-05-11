import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import AlternativeHeader from '../components/AlternativeHeader';
import Advertising from '../components/Advertising';
import Infos from '../components/profile/Infos';
import {
  ProfileStyled,
  ProfileInfos,
  ProfilePanel,
  ProfilePanelBox,
  NoProfileStyled,
  ProfileCards,
  HeadingBox,
} from '../styles/profile';

function Profile() {
  const navigate = useNavigate();
  const [logged, setLogged] = useState(false);
  const [profile, setProfile] = useState({
    accountFavorites: [],
  });

  useEffect(() => {
    const recoverUserDB = JSON.parse(localStorage.getItem('user-register'));
    if (recoverUserDB) {
      setLogged(true);
      setProfile(recoverUserDB[0]);
    };
  }, []);

  const redirectToDetails = (id, path) => {
    return navigate(`/${path}/${id}`);
  };

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
            <HeadingBox>
              <span>Insígnias</span>
              {/* <button
                type="button"
              >
                <span className="material-icons-outlined">
                  arrow_drop_down
                </span>
              </button> */}
            </HeadingBox>
            {/* {profile.accountFavorites.map} */}
          </ProfilePanelBox>
          <ProfilePanelBox>
            <HeadingBox>
              <span>Favoritos</span>
              {/* <button
                type="button"
              >
                <span className="material-icons-outlined">
                  arrow_drop_down
                </span>
              </button> */}
            </HeadingBox>
            <ProfileCards>
              {profile.accountFavorites.map((show) => {
                const {id, poster_path: thumbNail, title} = show;
                const thumb = `https://image.tmdb.org/t/p/w500/${thumbNail}`;
                let path = 'movies';
                if (show.first_air_date) {
                  path = 'series';
                }

                return (
                  <img
                    key={title}
                    src={thumb}
                    alt={title}
                    onClick={() => redirectToDetails(id, path)}
                  />
                );
              })}
            </ProfileCards>
          </ProfilePanelBox>
          <ProfilePanelBox>
            <HeadingBox>
              <span>Para Assistir</span>
              {/* <button
                type="button"
              >
                <span className="material-icons-outlined">
                  arrow_drop_down
                </span>
              </button> */}
            </HeadingBox>
            {/* {profile.accountFavorites.map} */}
          </ProfilePanelBox>
          <ProfilePanelBox>
            <HeadingBox>
              <span>Assistindo</span>
              {/* <button
                type="button"
              >
                <span className="material-icons-outlined">
                  arrow_drop_down
                </span>
              </button> */}
            </HeadingBox>
            {/* {profile.accountFavorites.map} */}
          </ProfilePanelBox>
          <ProfilePanelBox>
            <HeadingBox>
              <span>Já vistos</span>
              {/* <button
                type="button"
              >
                <span className="material-icons-outlined">
                  arrow_drop_down
                </span>
              </button> */}
            </HeadingBox>
            {/* {profile.accountFavorites.map} */}
          </ProfilePanelBox>
        </ProfilePanel>
      </ProfileStyled>
    </>
  );
}

export default Profile;
