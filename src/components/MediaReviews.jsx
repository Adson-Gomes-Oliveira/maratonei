import React from 'react';
import PropTypes from 'prop-types';
import {v4 as uuidv4} from 'uuid';
import {MediaReviewStyled, ReviewStyled} from '../styles';

function MediaReviews({detailsData}) {
  const {reviews} = detailsData;

  return (
    <MediaReviewStyled>
      {reviews.length > 0 && (
        <>
          <h3>Avaliações dos Usuários</h3>
          <span>As avaliações abaixo retiradas do TMDB</span>
          <ReviewStyled>
            {reviews.map((reviews) => {
              const {
                author,
                url,
                author_details: authorDetails,
                created_at: createdAt,
              } = reviews;

              return (
                <div key={uuidv4()}>
                  <div>
                    <span>{author}</span>
                    <span>{`${authorDetails.rating}/10`}</span>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Acessar a Avaliação do Usuário
                    </a>
                  </div>
                  <span>{createdAt}</span>
                </div>
              );
            })}
          </ReviewStyled>
        </>
      )}
    </MediaReviewStyled>
  );
}

MediaReviews.propTypes = {
  detailsData: PropTypes.object,
};

export default MediaReviews;
