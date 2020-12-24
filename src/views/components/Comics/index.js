import React from 'react';
import PropTypes from 'prop-types';
import {
  Title, Container, Image
} from './styles';

function Comics({ comic }) {
  return (
    <Container>
      <Image src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
      <Title> {comic.title || '-'} </Title>
    </Container>
  );
}

Comics.propTypes = {
  comic: PropTypes.shape({
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired
    }).isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default Comics;
