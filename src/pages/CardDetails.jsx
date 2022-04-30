import React, {useEffect} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import MovieDetailsLeftSide from '../components/MovieDetailsLeftSide';
import CastAndCrew from '../components/CastAndCrew';
import MovieReviews from '../components/MovieReviews';
import MovieDetailsCenter from '../components/MovieDetailsCenter';
import AlternativeHeader from '../components/AlternativeHeader';
import Advertising from '../components/Advertising';
import Footer from '../components/Footer';
import {useDetailsAPI} from '../hooks/useRequestAPI';
import {
  CardDetailStyled,
  CardsSectionStyled,
  CardCenterStyled,
  CardPrimaryInfoStyled,
} from '../styles/cardDetails';

function CardDetails() {
  const {id} = useParams();
  const {pathname} = useLocation();
  const [result, setShowId] = useDetailsAPI(pathname);

  useEffect(() => {
    setShowId(id);
  }, [id]);

  return (
    <>
      <AlternativeHeader />
      <Advertising />
      <CardDetailStyled>

        <CardsSectionStyled>

          <CardPrimaryInfoStyled>

            <MovieDetailsLeftSide detailsData={result}/>

          </CardPrimaryInfoStyled>

          <CardCenterStyled>

            <MovieDetailsCenter detailsData={result} />
            <MovieReviews detailsData={result} />

          </CardCenterStyled>

        </CardsSectionStyled>

        <CastAndCrew detailsData={result} />

      </CardDetailStyled>
      <Footer />
    </>
  );
}

export default CardDetails;
