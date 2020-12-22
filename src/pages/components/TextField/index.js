import React from 'react';
import { Input, FlexContainer, Icon } from './styles';
import search from '../../../assets/busca/Lupa/search.svg'

class TextField extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { placeholder, onChange } = this.props;
        return (
            <FlexContainer>
                <Icon src={search}/>
                <Input onChange={onChange} placeholder={placeholder} />
            </FlexContainer>
        );
    }
}

export default TextField;