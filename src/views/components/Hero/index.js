import React from 'react';
import PropTypes from 'prop-types';
import {
  Photo, PhotoContainer, Name, Container, FlexContainer, Icon,
} from './styles';
import heart from '../../../assets/icones/heart/heart.svg';
import emptyHeart from '../../../assets/icones/heart/empty-heart.svg';

function Hero({
  photo, name, onClick, onFav, fav
}) {
  return (
    <Container>
      <PhotoContainer>
        <Photo onClick={onClick} src={photo} />
      </PhotoContainer>
      <FlexContainer>
        <Name>
          {name}
        </Name>
        <Icon onClick={onFav} src={fav ? heart : emptyHeart} />
      </FlexContainer>
    </Container>
  );
}

Hero.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Hero;
