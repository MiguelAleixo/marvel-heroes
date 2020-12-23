import React from 'react';
import PropTypes from 'prop-types';
import {
  Title, SubTitle, Container, Description, TitleContainer, Icon, ItemsContainer, FlexContainer, Fav
} from './styles';
import heart from '../../../assets/icones/heart/heart.svg';
import emptyHeart from '../../../assets/icones/heart/empty-heart.svg';
import video from '../../../assets/icones/video/video.svg';
import book from '../../../assets/icones/book/book.svg';

function HeroDetail({ hero, onFav }) {
  return (
    <Container>
      <TitleContainer>
        <Title> {hero.name} </Title>
        <Fav onClick={onFav} src={hero.fav ? heart : emptyHeart} />
      </TitleContainer>
      <Description> {hero.description || '-'} </Description>
      <FlexContainer>
        <ItemsContainer>
          <SubTitle> Quadrinhos </SubTitle>
          <FlexContainer>
            <Icon src={book} />
            <SubTitle> {hero.comics && hero.comics.available || '-'} </SubTitle>
          </FlexContainer>
        </ItemsContainer>
        <ItemsContainer>
          <SubTitle> Filmes </SubTitle>
          <FlexContainer>
            <Icon src={video} />
            <SubTitle> {hero.comics && hero.comics.available} </SubTitle>
          </FlexContainer>
        </ItemsContainer>
      </FlexContainer>
    </Container>
  );
}

// HeroDetail.propTypes = {
//   photo: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired
// };

export default HeroDetail;
