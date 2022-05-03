import React, {useContext} from 'react';
import MaratoneiContext from '../../context/MaratoneiContext';

function Infos() {
  const {profile} = useContext(MaratoneiContext);
  const {} = profile.accountProfile

  return(
    <div>
      <ProfileImage bg={} />
      <span>{`${} ${}`}</span>
      <span>{}</span>
      <span>{}</span>
    </div>
  );
}

export default Infos;
