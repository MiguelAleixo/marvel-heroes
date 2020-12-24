import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
`;

export const DetailsContainer = styled.div`
    width: 30%;
    margin: 24px;
`;

export const ImageContainer = styled.div`
    width: 70%;
    margin: 24px;
`;

export const HeroImage = styled.img`
    width: 100%;
`;

export const Title = styled.h1`
    font-family: 'Work Sans', sans-serif;
    margin: 0;
    width: 90%;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: start;
    font-size: 32px;
    font-weight: bold;
    color: #404040;
    text-transform: uppercase;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 16px 0;
    white-space: nowrap;
`;

export const Fav = styled.img`
    width: 10%;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const Description = styled.p`
    font-family: 'Work Sans', sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    color: #8C8C8C;
`;
