import React from 'react';
import PropTypes from 'prop-types';
import {v4 as uuidv4} from 'uuid';
import {CardsStyled, CardStyled} from '../styles';
import {ZERO} from '../data';

function starsGenerator(amount) {
  const starsNoChecked = ['star_border', 'star_border',
    'star_border', 'star_border', 'star_border'];
  const starsChecked = [];
  if (amount >= ZERO) {
    starsNoChecked.forEach((star, index) => {
      if (index < amount) {
        return starsChecked.push('star');
      }

      starsChecked.push(star);
    });
  }
  return (
    <div>
      {starsChecked.map((star) => (
        <span key={uuidv4()} className="material-icons-outlined">{star}</span>
      ))}
    </div>
  );
}

function MoviesCards({data}) {
  return (
    <CardsStyled>
      {data.map((movie) => {
        const {poster_path: thumbNail, vote_average: voteAverage} = movie;
        const thumb = `https://image.tmdb.org/t/p/w500/${thumbNail}`;
        const starsNumber = Math.round(voteAverage / 2);
        return (
          <CardStyled key={uuidv4()}>
            <img src={thumb} alt="" />
            {starsGenerator(starsNumber)}
          </CardStyled>
        );
      })}
    </CardsStyled>
  );
};

MoviesCards.propTypes = {
  data: PropTypes.array,
};

export default MoviesCards;
