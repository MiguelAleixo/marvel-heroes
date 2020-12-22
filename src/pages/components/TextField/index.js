import React from 'react';
import PropTypes from 'prop-types';
import { Input, FlexContainer, Icon } from './styles';
import search from '../../../assets/busca/Lupa/search.svg';

function TextField({ placeholder, onChange }) {
  return (
    <FlexContainer>
      <Icon src={search} />
      <Input onChange={onChange} placeholder={placeholder} />
    </FlexContainer>
  );
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextField;
