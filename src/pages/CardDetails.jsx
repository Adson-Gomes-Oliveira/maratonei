import React, {useEffect} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import MediaDetailsLeft from '../components/MediaDetailsLeft';
import MediaDetailsCenter from '../components/MediaDetailsCenter';
import CastAndCrew from '../components/CastAndCrew';
import MovieReviews from '../components/MovieReviews';
import AlternativeHeader from '../components/AlternativeHeader';
import Advertising from '../components/Advertising';
import Footer from '../components/Footer';
import {useDetailsAPI} from '../hooks/useRequestAPI';
import {
  CardDetailStyled,
  MediaSectionStyled,
  MediaCenterStyled,
  MediaPrimaryInfoStyled,
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

        <MediaSectionStyled>

          <MediaPrimaryInfoStyled>

            <MediaDetailsLeft detailsData={result}/>

          </MediaPrimaryInfoStyled>

          <MediaCenterStyled>

            <MediaDetailsCenter detailsData={result} />
            <MovieReviews detailsData={result} />

          </MediaCenterStyled>

        </MediaSectionStyled>

        <CastAndCrew detailsData={result} />

      </CardDetailStyled>
      <Footer />
    </>
  );
}

export default CardDetails;
