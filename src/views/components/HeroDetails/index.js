import React from 'react';
import PropTypes from 'prop-types';
import {
  Title, Container, Description, TitleContainer, Fav, DetailsContainer, HeroImage, ImageContainer
} from './styles';
import InfoTable from '../InfoTable';
import heart from '../../../assets/icones/heart/heart.svg';
import emptyHeart from '../../../assets/icones/heart/empty-heart.svg';
import Loading from '../Loading';
import { setDisabled } from '../../../utils/setDisabled';

function HeroDetails({ hero, favorites, onFav }) {
  return (
    hero ? (
      <Container>
        <DetailsContainer>
          <TitleContainer>
            <Title> {hero.name || '-'} </Title>
            <Fav
              onClick={setDisabled(favorites, hero.fav) ? null : onFav}
              src={hero.fav ? heart : emptyHeart}
              disabled={setDisabled(favorites, hero.fav)}
            />
          </TitleContainer>
          <Description> {hero.description || '-'} </Description>
          <InfoTable comics={hero.comics.available} movies={hero.series.available} />
        </DetailsContainer>
        <ImageContainer>
          <HeroImage src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
        </ImageContainer>
      </Container>
    ) : <Loading />
  );
}

HeroDetails.propTypes = {
  hero: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fav: PropTypes.bool,
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
  }),
  favorites: PropTypes.array,
  onFav: PropTypes.func.isRequired
};

export default HeroDetails;
