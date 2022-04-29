import React from 'react';
import PropTypes from 'prop-types';
import {v4 as uuidv4} from 'uuid';
import {
  CardCreditsStyled,
  CastAndCrew,
  PersonStyled,
} from '../styles/index';

function CardCredits({detailsData}) {
  const {cast_and_crew: castAndCrew} = detailsData;

  return (
    <CardCreditsStyled>
      <h2>Quem ta participando?</h2>
      <CastAndCrew>
        {castAndCrew.map((person) => {
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
      </CastAndCrew>
    </CardCreditsStyled>
  );
}

CardCredits.propTypes = {
  detailsData: PropTypes.object,
};

export default CardCredits;
