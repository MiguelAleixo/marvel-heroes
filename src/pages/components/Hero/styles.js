import styled from 'styled-components'

export const Container = styled.div`
    user-select: none;
    max-width: 200px;
    width: 200px;
    margin: 24px;
    border-radius: 4px;
    overflow: hidden;
    transition: 0.3s;
    &:hover {
        box-shadow: 0 5px 10px #B9B9B9;
    }
`

export const Photo = styled.img`
    width: 100%;
    height: 196px;
    border-bottom: 4px solid #FF1510;
`

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 16px 0;
`

export const Name = styled.h2`
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
    color: #404040;
    margin: 0 8px;
`

export const Icon = styled.img`
    margin: 0 8px;
    width: 16px;
`
