import styled from 'styled-components';

export const Container = styled.div`
    user-select: none;
    max-width: 200px;
    width: 200px;
    margin: 24px;
    border-radius: 4px;
    overflow: hidden;
`;

export const Title = styled.h1`
    font-family: 'Work Sans', sans-serif;
    text-align: start;
    font-size: 32px;
    font-weight: bold;
    color: #404040;
    text-transform: uppercase;
`;

export const SubTitle = styled.h3`
    font-family: 'Work Sans', sans-serif;
    font-size: 12px;
    text-align: start;
    color: #404040;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 16px 0;
`;

export const Fav = styled.img`
    width: 24px;
    cursor: pointer;
`;

export const Icon = styled.img`
    width: 24px;
`;

export const Description = styled.p`
    font-family: 'Work Sans', sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    color: #8C8C8C;
`;

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`;
