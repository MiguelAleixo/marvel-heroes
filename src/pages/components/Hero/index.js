import React from 'react';
import PropTypes from 'prop-types';
import {
  Photo, Name, Container, FlexContainer, Icon,
} from './styles';
import heart from '../../../assets/icones/heart/heart.svg';
import emptyHeart from '../../../assets/icones/heart/empty-heart.svg';

function Hero({ photo, name }) {
  return (
    <Container>
      <Photo src={photo} />
      <FlexContainer>
        <Name>
          {name}
        </Name>
        <Icon src={false ? heart : emptyHeart} />
      </FlexContainer>
    </Container>
  );
}

Hero.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Hero;
