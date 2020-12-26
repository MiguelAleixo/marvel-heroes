import React from 'react';
import PropTypes from 'prop-types';
import {
  Table, Th, Td, Icon
} from './styles';
import video from '../../../assets/icones/video/video.svg';
import book from '../../../assets/icones/book/book.svg';
import stars from '../../../assets/review/stars.svg';

function InfoTable({ comics, movies }) {
  return (
    <Table>
      <tbody>
        <tr>
          <Th colSpan="2">Quadrinhos</Th>
          <Th colSpan="2">Filmes</Th>
        </tr>
        <tr>
          <Td>
            <Icon src={book} />
          </Td>
          <Th>{comics}</Th>
          <Td>
            <Icon src={video} />
          </Td>
          <Th>{movies}</Th>
        </tr>
        <tr>
          <Th colSpan="2">Rating:</Th>
          <Td colSpan="2">
            <Icon style={{ width: '64px' }} src={stars} />
          </Td>
        </tr>
        <tr>
          <Th colSpan="2">Último quadrinho:</Th>
          <Td colSpan="2">13 fev. 2020</Td>
        </tr>
      </tbody>
    </Table>

  );
}

InfoTable.propTypes = {
  comics: PropTypes.number.isRequired,
  movies: PropTypes.number.isRequired
};

export default InfoTable;
