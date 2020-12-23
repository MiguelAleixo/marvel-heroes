import styled from 'styled-components';

export const HomeContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 992px;
    margin: auto;
`;

export const HeroesContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Title = styled.h1`
    font-family: 'Work Sans', sans-serif;
    text-align: center;
    margin: 4px 0;
    font-size: 28px;
    color: #404040;
`;

export const SubTitle = styled.p`
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    margin: 0;
    text-align: center;
    font-size: 14px;
    color: #8C8C8C;
`;

export const MarvelLogo = styled.img`
    width: 280px;
    margin: auto;
`;
