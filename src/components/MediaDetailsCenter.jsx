import React from 'react';
import PropTypes from 'prop-types';
import {useNavigate, useLocation} from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';
import {
  MediaHeadlineStyled,
  MediaVideoStyled,
  MediaRecomendationStyled,
} from '../styles/mediaDetails';

function MediaDetailsCenter({detailsData}) {
  const {pathname} = useLocation();
  const navigate = useNavigate();

  const {
    title,
    tagline,
    overview,
    recomendations,
    trailer_key: trailer,
  } = detailsData;

  const redirectToDetails = (id) => {
    const redirectPath = pathname.split('/', 2)[1];
    return navigate(`/${redirectPath}/${id}`);
  };

  return (
    <>
      <MediaHeadlineStyled>
        <h2>{title}</h2>
        <span>{tagline}</span>
        <p>{overview}</p>
      </MediaHeadlineStyled>

      <MediaVideoStyled>
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
          <h3>Trailer não disponível</h3>
        )}
      </MediaVideoStyled>

      <MediaRecomendationStyled>
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
      </MediaRecomendationStyled>
    </>
  );
}

MediaDetailsCenter.propTypes = {
  detailsData: PropTypes.object,
};

export default MediaDetailsCenter;
