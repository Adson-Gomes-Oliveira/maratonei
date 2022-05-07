import React from 'react';
import PropTypes from 'prop-types';
import {v4 as uuidv4} from 'uuid';
import {
  CastAndCrewStyled,
  CastStyled,
  PersonStyled,
} from '../styles/castAndCrew';

function CastAndCrew({detailsData}) {
  const {cast_and_crew: cast} = detailsData;
  console.log(cast);
  return (
    <CastAndCrewStyled>
      <h2>Quem ta participando?</h2>
      <CastStyled>
        {cast[0] !== undefined && cast.map((person) => {
          const {
            name,
            character,
            profile_path: thumbNail,
            known_for_department: department,
          } = person;
          const thumb = `https://image.tmdb.org/t/p/w185/${thumbNail}`;

          return (
            <PersonStyled key={uuidv4()}>
              <img src={thumb} alt={`Ator ${name}`} />
              <div>
                <span>{department}</span>
                <span>{name}</span>
                <span>{character}</span>
              </div>
            </PersonStyled>
          );
        })}
      </CastStyled>
    </CastAndCrewStyled>
  );
}

CastAndCrew.propTypes = {
  detailsData: PropTypes.object,
};

export default CastAndCrew;
