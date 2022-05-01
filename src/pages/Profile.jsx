import React from 'react';

function Profile() {
  return(
    <ProfileStyled>
      <LeftSideStyled>
        <Infos />
        <Badges />
        <Social />
      </LeftSideStyled>
      <RightSideStyled>
        <About />
        <Favorite type="movies" />
        <Favorite type="tvShows" />
        <Watch />
        <Statistics />
      </RightSideStyled>
    </ProfileStyled>
  );
}

export default Profile;
