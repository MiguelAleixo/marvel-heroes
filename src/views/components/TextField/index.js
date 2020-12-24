import React from 'react';
import PropTypes from 'prop-types';
import { Input, FlexContainer, Icon } from './styles';
import search from '../../../assets/busca/Lupa/search.svg';

function TextField({
  placeholder, onChange, color, disabled
}) {
  return (
    <FlexContainer style={{ backgroundColor: color }}>
      <Icon src={search} />
      <Input disabled={disabled} onChange={onChange} placeholder={placeholder} />
    </FlexContainer>
  );
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  color: PropTypes.string,
  disabled: PropTypes.bool
};

export default TextField;
