import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';
import MaratoneiContext from '../context/MaratoneiContext';
import {
  CardHeadlineStyled,
  CardVideoStyled,
  CardRecomendationStyled,
} from '../styles/cardDetails';

function MovieDetailsCenter() {
  const navigate = useNavigate();

  const {
    moviesAndSeriesDetails,
  } = useContext(MaratoneiContext);

  const {
    title,
    tagline,
    overview,
    recomendations,
    trailer_key: trailer,
  } = moviesAndSeriesDetails;

  const redirectToDetails = (id) => {
    navigate(`/movies/${id}`);
    return fetchDetails(id);
  };

  return (
    <>
      <CardHeadlineStyled>
        <h2>{title}</h2>
        <span>{tagline}</span>
        <p>{overview}</p>
      </CardHeadlineStyled>

      <CardVideoStyled>
        {trailer ? (
          <>
            <h3>{trailer.name}</h3>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${trailer.key}`}
              width='40rem'
              light
            />
          </>
        ) : (
          <h3>Trailer do filme não disponível</h3>
        )}
      </CardVideoStyled>

      <CardRecomendationStyled>
        <h3>Recomendações Similares</h3>
        <div>
          {recomendations.map((rec) => {
            const {id, poster_path: thumbNail, title} = rec;
            const thumb = `https://image.tmdb.org/t/p/w500/${thumbNail}`;

            return (
              <img
                key={title}
                src={thumb}
                alt={title}
                onClick={() => redirectToDetails(id)}
              />
            );
          })}
        </div>
      </CardRecomendationStyled>
    </>
  );
}

export default MovieDetailsCenter;
