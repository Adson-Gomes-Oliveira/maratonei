import React from 'react';
import PropTypes from 'prop-types';
import {starsGenerator} from './MoviesCards';
import {
  CardVoteStyled,
  CardRealeaseStyled,
  CardCategoryStyled,
  CardRevenueStyled,
  CardCompanieStyled,
  CardProviderStyled,
} from '../styles/cardDetails';

function movieDetailsLeftSide({detailsData}) {
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

      <CardVoteStyled>
        {`Nota popular: ${voteAverage}/10`}
      </CardVoteStyled>

      <CardRealeaseStyled>
        {`Data de lançamento: ${releaseDate}`}
      </CardRealeaseStyled>

      <CardCategoryStyled>
        <span>Categorias:</span>
        {genres.map((genre) => (
          <span key={genre.id}>{genre.name}</span>
        ))}
      </CardCategoryStyled>

      <CardRevenueStyled>
        <span>Resultados Financeiros</span>
        <span>
          <span>Orçamento:</span>
          {`USD ${movieConvertCurrency(budget)}`}
        </span>
        <span>
          <span>Receita:</span>
          {`USD ${movieConvertCurrency(revenue)}`}
        </span>
      </CardRevenueStyled>

      <CardCompanieStyled>
        {companies.map((comp, index) => {
          const {logo_path: thumbNail, name} = comp;
          const thumb = `https://image.tmdb.org/t/p/w500/${thumbNail}`;

          if (index === 0) {
            return (
              <>
                <img key={`${name}`} src={thumb} alt={name} />
                <span>Outras Produtoras</span>
              </>
            );
          }

          return (
            <span key={`${name}`}>{name}</span>
          );
        })}
      </CardCompanieStyled>

      <CardProviderStyled>
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
                  <img key={name} src={thumb} alt={name} />
                );
              })}
            </div>
          </>
        ): (
          <span>Ainda não disponível em Streamings</span>
        )}
      </CardProviderStyled>
    </>
  );
}

movieDetailsLeftSide.propTypes = {
  detailsData: PropTypes.object,
};

export default movieDetailsLeftSide;
