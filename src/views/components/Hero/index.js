import React from 'react';
import PropTypes from 'prop-types';
import {
  Photo, PhotoContainer, Name, Container, FlexContainer, Icon,
} from './styles';
import { setDisabled } from '../../../utils/setDisabled';
import heart from '../../../assets/icones/heart/heart.svg';
import emptyHeart from '../../../assets/icones/heart/empty-heart.svg';

function Hero({
  onClick, onFav, favorites, hero
}) {
  return (
    <Container>
      <PhotoContainer>
        <Photo onClick={onClick} src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
      </PhotoContainer>
      <FlexContainer>
        <Name>
          {hero.name}
        </Name>
        <Icon
          disabled={setDisabled(favorites, hero.fav)}
          onClick={setDisabled(favorites, hero.fav) ? null : onFav}
          src={hero.fav ? heart : emptyHeart}
        />
      </FlexContainer>
    </Container>
  );
}

Hero.propTypes = {
  hero: PropTypes.shape({
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired
    }).isRequired,
    name: PropTypes.string.isRequired,
    fav: PropTypes.bool,
  }).isRequired,
  favorites: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  onFav: PropTypes.func.isRequired
};

export default Hero;
