import styled from 'styled-components';

export const Container = styled.div`
    user-select: none;
    max-width: 200px;
    width: 200px;
    margin: 24px;
    border-radius: 4px;
    overflow: hidden;
`;

export const Photo = styled.img`
    width: 100%;
    height: 196px;
    border-bottom: 4px solid #FF1510;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      transform: scale(1.1)
  }
`;

export const PhotoContainer = styled.div`
    max-height: 196px;
    overflow: hidden;
    border-bottom: 4px solid #FF1510;
`;

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 16px 0;
    white-space: nowrap;
`;

export const Name = styled.h2`
    width: 90%;
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
    color: #404040;
    margin: 0 8px;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const Icon = styled.img`
    margin: 0 8px;
    width: 10%;
    transition: 0.3s;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    &:hover {
      transform: ${props => (props.disabled ? 'scale(1.0)' : 'scale(1.1)')};
    }
    &:disabled {
      cursor: block;
    }
`;

// const StyledIcon = styled(Icon)<{ open: boolean }>`
//    top: ${p => (p.open ? 0 : 100)}%;
// `;
