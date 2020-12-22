import React from 'react';
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

export default TextField;
