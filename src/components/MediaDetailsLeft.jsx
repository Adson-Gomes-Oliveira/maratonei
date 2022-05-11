import React from 'react';
import PropTypes from 'prop-types';
import {useLocation} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import {starsGenerator} from '../components/MediaCards';
import {
  MediaVoteStyled,
  MediaRealeaseStyled,
  MediaCategoryStyled,
  MediaRevenueStyled,
  MediaCompanieStyled,
  MediaProviderStyled,
} from '../styles/mediaDetails';

function MediaDetailsLeft({detailsData}) {
  const {pathname} = useLocation();
  const path = pathname.split('/', 2)[1];
  const {
    genres,
    budget,
    revenue,
    providers,
    poster_path: thumbNail,
    release_date: release,
    vote_average: voteAverage,
    production_companies: companies,
  } = detailsData;

  const releaseDate = release;
  const movieConvertCurrency = (number) => {
    return new Intl.NumberFormat('en-US',
        {style: 'currency', currency: 'USD', minimumFractionDigits: 2})
        .format(number);
  };

  const thumb = `https://image.tmdb.org/t/p/w500/${thumbNail}`;
  const starsNumber = Math.round(voteAverage / 2);
  const stars = starsGenerator(starsNumber);

  return (
    <>
      <img src={thumb} alt="" />
      <div>{stars}</div>

      <MediaVoteStyled>
        {`Nota popular: ${voteAverage}/10`}
      </MediaVoteStyled>
      {path === 'movies' && (
        <MediaRealeaseStyled>
          {`Data de lançamento: ${releaseDate}`}
        </MediaRealeaseStyled>
      )}

      <MediaCategoryStyled>
        <span>Categorias:</span>
        {genres.map((genre) => (
          <span key={uuidv4()}>{genre.name}</span>
        ))}
      </MediaCategoryStyled>

      {path === 'movies' && (
        <MediaRevenueStyled>
          <span>Resultados Financeiros</span>
          <span>
            <span>Orçamento:</span>
            {`USD ${movieConvertCurrency(budget)}`}
          </span>
          <span>
            <span>Receita:</span>
            {`USD ${movieConvertCurrency(revenue)}`}
          </span>
        </MediaRevenueStyled>
      )}

      <MediaCompanieStyled>
        {companies.map((comp, index) => {
          const {logo_path: thumbNail, name} = comp;
          const thumb = `https://image.tmdb.org/t/p/w500/${thumbNail}`;

          if (index === 0) {
            return (
              <>
                <img key={uuidv4()} src={thumb} alt={name} />
                <span>Outras Produtoras</span>
              </>
            );
          }

          return (
            <span key={uuidv4()}>{name}</span>
          );
        })}
      </MediaCompanieStyled>

      <MediaProviderStyled>
        {providers && providers.flatrate ? (
          <>
            <span>Em qual streaming assistir?</span>
            <div>
              {providers.flatrate.map((prov) => {
                const {
                  logo_path: thumbNail,
                  provider_name: name,
                } = prov;
                const thumb = `https://image.tmdb.org/t/p/w500/${thumbNail}`;

                return (
                  <img key={uuidv4()} src={thumb} alt={name} />
                );
              })}
            </div>
          </>
        ): (
          <span>Ainda não disponível em Streamings</span>
        )}
      </MediaProviderStyled>
    </>
  );
}

MediaDetailsLeft.propTypes = {
  detailsData: PropTypes.object,
};

export default MediaDetailsLeft;
