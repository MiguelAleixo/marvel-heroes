import styled from 'styled-components';

export const FlexContainer = styled.div`
    display: flex;
    background-color: #FDECEC;
    border-radius: 25px;
    margin: 46px auto;
    width: 620px;
`;

export const Input = styled.input.attrs({ type: 'text' })`
    font-family: 'Work Sans', sans-serif;
    width: 100%;
    height: 36px;
    background-color: transparent;
    border: none;
    outline: none;
    ::placeholder {
        font-family: 'Work Sans', sans-serif;
        font-size: 12px;
        color: #FF1511;
        opacity: 0.6;
    }
`;

export const Icon = styled.img`
    width: 18px;
    margin: 0 22px 0 16px;
`;
