import React from 'react';
import PropTypes from 'prop-types';
import {
  Title, Container, ComicsContainer
} from './styles';
import Comics from '../Comics';

function LastReleases({ comics }) {
  return (
    <Container>
      <Title> { comics.length ? 'Ultimos lançamentos' : 'Este herói não possui nenhum quadrinho :(' } </Title>
      <ComicsContainer>
        {
          comics.map(obj => (<Comics comic={obj} />))
        }
      </ComicsContainer>
    </Container>
  );
}

LastReleases.propTypes = {
  comics: PropTypes.object.isRequired
};

export default LastReleases;
