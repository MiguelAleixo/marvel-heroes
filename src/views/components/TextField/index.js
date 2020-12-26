import React from 'react';
import PropTypes from 'prop-types';
import { Input, FlexContainer, Icon } from './styles';
import search from '../../../assets/busca/Lupa/search.svg';

function TextField({
  value, placeholder, onChange, color, disabled
}) {
  return (
    <FlexContainer style={{ backgroundColor: color }}>
      <Icon src={search} />
      <Input value={value} disabled={disabled} onChange={onChange} placeholder={placeholder} />
    </FlexContainer>
  );
}

TextField.propTypes = {
  value: PropTypes.any,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  color: PropTypes.string,
  disabled: PropTypes.bool
};

export default TextField;
