import React from 'react';
import PropTypes from 'prop-types';
import {
  Title, Container, Description, TitleContainer, Fav, DetailsContainer, HeroImage, ImageContainer
} from './styles';
import InfoTable from '../InfoTable';
import heart from '../../../assets/icones/heart/heart.svg';
import emptyHeart from '../../../assets/icones/heart/empty-heart.svg';

function HeroDetails({ hero, onFav }) {
  return (
    hero ? (
      <Container>
        <DetailsContainer>
          <TitleContainer>
            <Title> {hero.name} </Title>
            <Fav onClick={onFav} src={hero.fav ? heart : emptyHeart} />
          </TitleContainer>
          <Description> {hero.description || '-'} </Description>
          <InfoTable comics={hero.comics.available} movies={hero.series.available} />
        </DetailsContainer>
        <ImageContainer>
          <HeroImage src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
        </ImageContainer>
      </Container>
    ) : <></>
  );
}

HeroDetails.propTypes = {
  hero: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fav: PropTypes.bool.isRequired,
    comics: PropTypes.shape({
      available: PropTypes.number.isRequired,
    }).isRequired,
    series: PropTypes.shape({
      available: PropTypes.number.isRequired,
    }).isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired,
  onFav: PropTypes.func.isRequired
};

export default HeroDetails;
