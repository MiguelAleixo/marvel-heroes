import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Text, Toggle, Icon
} from './styles';
import right from '../../../assets/toggle/right.svg';
import left from '../../../assets/toggle/left.svg';
import hero from '../../../assets/icones/heroi/hero.svg';
import heart from '../../../assets/icones/heart/heart.svg';

function Filters({ onClick, onlyFav }) {
  return (
    <Container>
      <Icon src={hero} />
      <Text> Ordenar por nome - A/Z </Text>
      <Toggle src={onlyFav ? right : left} onClick={onClick} />
      <Icon src={heart} />
      <Text> Somente favoritos </Text>
    </Container>
  );
}

Filters.propTypes = {
  onlyFav: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Filters;
