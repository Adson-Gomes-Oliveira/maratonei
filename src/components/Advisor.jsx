import React from 'react';
import {AdStyled} from '../styles';
import {CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {streamingAds} from '../data';

function Advisor() {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={3.5}
      totalSlides={streamingAds.length}
      isPlaying={false}
      touchEnabled={false}
      dragEnabled={false}
      interval={8000}
    >
      <Slider>
        {streamingAds.map((ad, index) => {
          const {copy, bgColor} = ad;
          return (
            <Slide key={`slide-ad-element-${index}`}>
              <AdStyled bgColor={bgColor} data-testId='advisor'>
                <span>{copy}</span>
              </AdStyled>
            </Slide>
          );
        })}
      </Slider>
    </CarouselProvider>
  );
}

export default Advisor;
